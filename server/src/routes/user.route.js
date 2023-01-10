const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/', userController.getAllUser);
userRouter.get('/faucet/:userid', userController.getEth);
userRouter.post('/sendtoken', userController.sendToken);
module.exports = userRouter;
