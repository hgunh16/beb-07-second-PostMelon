const Web3 = require('web3');
const Contract = require('web3-eth-contract');

//추후 production상태일 때 Infura로 바꿔줘야함
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

/* account function */
//서버 계정 설정하기
async function serverAccount() {
  try {
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    return accounts[0];
  } catch (e) {
    console.error(e);
  }
}

// 계정 생성
async function createAccount(password) {
  try {
    const account = await web3.eth.personal.newAccount(password);
    return account;
  } catch (e) {
    console.error(e);
  }
}

/* test function */
async function hello() {
  try {
    const abi = [
      {
        "inputs": [],
        "name": "renderHelloWorld",
        "outputs": [
          {
            "internalType": "string",
            "name": "greeting",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      }
    ];
    const address = '0xe17F23d554A3F701B93931e92731A36455F476e1';

    Contract.setProvider('http://127.0.0.1:7545');
    const contract = new Contract(abi, address);

    const result = await contract.methods.renderHelloWorld().call();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// hello().then((res) => {
//   console.log(res);
// });

/* post function */

async function getBalance(account) {
  try {
    console.log(account);
    const abi = require('./ABI').myTokenAbi;
    const server_account = await web3.eth.accounts.privateKeyToAccount(
      '0x0d65605052f1e80a8e02b2c1a3a4cf1866665922dce6877c7af4bf2b8b306e53'
    );
    const address = server_account.address;
    console.log(address);
    console.log(typeof address);
    Contract.setProvider('http://127.0.0.1:7545');
    const contract = new Contract(abi, address);

    console.log(contract.methods);

    const balance = await contract.methods.decimals().call();
    console.log(balance);
    return balance;
  } catch (err) {
    console.error(err);
  }
}

async function getToken(recipient) {
  try {
    const abi = require('./ABI').myTokenAbi;
    const server_account = await web3.eth.accounts.privateKeyToAccount(
      '0x0d65605052f1e80a8e02b2c1a3a4cf1866665922dce6877c7af4bf2b8b306e53'
    );
    const address = server_account.address;

    Contract.setProvider('http://127.0.0.1:7545');
    const contract = new Contract(abi, address);
    // const result = await contract.methods
    //   .transfer(recipient, 200000)
    //   .send({ from: address, gasPrice: 6000000000, gas: 2100000 });
    // console.log('result : ', result);
    // const balance = await contract.methods.balanceOf(recipient).call();
    // console.log(balance);

    const tx = await contract.methods.transfer(
      recipient,
      '3000000000000000000000'
    );

    let txObj = {
      gasPrice: await web3.eth.getGasPrice(),
      amount: 2000,
      gas: 210000,
      to: '0xdf971fB2f69E1C477FEDEec5e66903190f58553c',
      from: address,
      data: tx.encodeABI(),
    };

    const signedTx = await server_account.signTransaction(txObj);
    const result = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    return result;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  serverAccount,
  createAccount,
  getToken,
  getBalance,
};
