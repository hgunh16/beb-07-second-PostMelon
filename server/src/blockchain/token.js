const {web3J, tokenContract} = require('./');
// console.log(tokenContract.methods);

//환경변수 가져오기
const {SERVER_ACC, SERVER_PK, POST_TOKEN_AMOUNT, TOKEN_CA, GAS} = process.env;

//토큰 잔액 확인
async function getBalance(account){
  try{
    const balance = await tokenContract.methods.balanceOf(account).call();
    console.log(`account balance : ${balance}`);
    return balance;
  }catch(e){
    console.error(e);
  }
}

//게시글 작성 시 토큰 전송
async function givePostToken(account){
  try{

    //트랜잭션 생성
    const txData = await tokenContract.methods.transfer(account, POST_TOKEN_AMOUNT).encodeABI();

    //tx 객체 생성
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
  getBalance,
  givePostToken
}