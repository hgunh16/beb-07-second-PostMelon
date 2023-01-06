const express = require('express');
const signUpController = require('../controllers/signUp.controller');
const signUpRouter = express.Router();

signUpRouter.post('/', signUpController.signUp);

// signUpRouter.post('/signup', signUpController.signUpPage);

module.exports = signUpRouter;
