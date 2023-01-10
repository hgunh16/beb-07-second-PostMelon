const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).send('no user');
    }

    const match = await bcrypt.compare(password, userData.password);
    if (!match) {
      return res.status(400).send('user invalid');
    } else {
      //JWT 생성(access, refresh)
      //access token은 client에서 react state로
      const accessToken = jwt.sign(
        {
          email: userData.email,
          nickname: userData.nickname,
          createdAt: userData.createdAt,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.ACCESS_SECRET
      );

      //refresh token은 client에서 cookie로
      const refreshToken = jwt.sign(
        {
          email: userData.email,
          nickname: userData.nickname,
          createdAt: userData.createdAt,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.REFRESH_SECRET
      );

      res.cookie('refreshToken', refreshToken, {
        maxAge: 10000,
        sameSite: true,
        secure: true,
        httpOnly: true,
      });

      res
        .status(200)
        .json({ data: { accessToken: accessToken }, message: 'ok' });
    }
  },
  valid: (req, res) => {
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ data: null, message: 'invalid access token' });
    }

    try {
      const token = authorization.split(' ')[1];
      const data = jwt.verify(token, process.env.ACCESS_SECRET);

      if(data){
        return res.status(200).json({
          data: {
            email: data.email,
            nickname: data.nickname,
            createdAt: data.createdAt,
          },
          message: 'ok',
        });
      }
      
      return res.status(400).json({ data: null, message: 'invalid access token' });
    } catch (err) {
      res.status(400).json({ data: null, message: 'invalid access token' });
    }
  },
};
