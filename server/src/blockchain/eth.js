const User = require('../models/user')
const {web3J} = require('./');

async function getEth(address, userId) {
  try{

    // 송금하는 계정 : 현재 서버계정
    const sendAccount = process.env.SERVER_ACC;
    const privateKey = process.env.SERVER_PK;
    
    //트랜잭션 생성
    const tx = {
      from : sendAccount, 
      to : address,
      gas : process.env.GAS,
      value : web3J.utils.toWei("1","ether") 
    }
    
    const signedTx = await web3J.eth.accounts.signTransaction(tx, privateKey) // 트랜잭션에 sign 서명 
    
    // 트랜잭션 보내기
    await web3J.eth.sendSignedTransaction(signedTx.rawTransaction);

    // 현재 잔액 확인
    const balance = await web3J.eth.getBalance(address);
    
    // DB 업데이트
    await User.update(
      {_id : userId},
      {eth_amount : parseFloat(web3J.utils.fromWei(balance, "ether"))},
    )

    return parseFloat(web3J.utils.fromWei(balance, "ether"));


  }catch(e){
    console.error(e);
  }
}

module.exports={
  getEth
}