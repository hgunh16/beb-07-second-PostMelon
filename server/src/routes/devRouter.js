const express = require('express');
const devController = require('../controllers/devController');
const devRouter = express.Router();

devRouter.get('/', devController.devHome);

module.exports = devRouter;
