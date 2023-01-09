const {web3J, tokenContract} = require('./');
// console.log(tokenContract.methods);

const {SERVER_ACC, SERVER_PK, POST_TOKEN_AMOUNT, TOKEN_CA, GAS} = process.env;

async function createAccount(password) {
  try {
    const account = await web3J.eth.personal.newAccount(password);
    return account;
  } catch (e) {
    console.error(e);
  }
}

async function getBalance(account){
  try{
    const balance = await tokenContract.methods.balanceOf(account).call();
    console.log(`account balance : ${balance}`);
    return balance;
  }catch(e){
    console.error(e);
  }
}

async function givePostToken(account){
  try{
    const txData = await tokenContract.methods.transfer(account, POST_TOKEN_AMOUNT).encodeABI();

    const txObj = {
      from : SERVER_ACC,
      to : TOKEN_CA,
      gas : GAS,
      gasPrice : await web3J.eth.getGasPrice(),
      data : txData
    }

    const signedTx =await web3J.eth.accounts.signTransaction(txObj, SERVER_PK);
    const result = await web3J.eth.sendSignedTransaction(signedTx.rawTransaction);
    return result;
  }catch(e){
    console.error(e);
  }
}

//test code

// async function main(){
//   const acc = await createAccount(12345)
//   await givePostToken(acc);
//   const bal = await getBalance(acc);
//   console.log(bal);
// }

// main()

module.exports = {
  createAccount,
  getBalance,
  givePostToken
}