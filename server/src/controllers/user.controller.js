const User = require('../models/user');
const jwt = require('jsonwebtoken');
const ethUtil = require('../blockchain/eth');

module.exports = {
  getAllUser: (req, res) => {
    res.send('user page');
  },
  getEth: async (req, res) => {

    //로그인 검증
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ data: null, message: 'invalid access token' });
    }

    try{
      const token = authorization.split(' ')[1];
      // console.log(token);
      const data = jwt.verify(token, process.env.ACCESS_SECRET);

      //로그인 됐다면
      if(data){
        const { userid } = req.params

        //id에 맞는 유저 찾기
        let user = await User.findById(userid);

        //eth를 송금하고 balance 계산
        const balance = await ethUtil.getEth(user.address, userid);
        console.log(balance);

        //송금 후 잔액 보내주기
        return res.status(200).json(`eth_balance : ${balance}`);
      }

      return res.status(400).json({ data: null, message: 'invalid access token' });
    }catch(err){
      
      //로그인 안돼있거나 문제가 생겼을 경우
      console.error(err);
      return res.status(500).json("fail");
    }
  }
};
