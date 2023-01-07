const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/login.controller');

loginRouter.post('/', loginController.login);
loginRouter.get('/validation', loginController.valid);

module.exports = loginRouter;
