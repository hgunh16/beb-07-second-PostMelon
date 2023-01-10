const {web3J} = require('./');

//계정 생성
async function createAccount(password) {
  try {
    const account = await web3J.eth.personal.newAccount(password);
    return account;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  createAccount,
}