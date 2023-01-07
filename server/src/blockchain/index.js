const Web3 = require('web3');

//추후 production상태일 때 Infura로 바꿔줘야함
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

//서버 계정 설정하기
async function setServerAccount() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    return accounts[0];
  } catch (e) {
    console.error(e);
  }
}

async function createAccount(password) {
  try {
    const account = await web3.eth.personal.newAccount(password);
    return account;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  setServerAccount,
  createAccount,
};
