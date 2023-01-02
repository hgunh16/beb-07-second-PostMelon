const express = require('express');
const devRouter = express.Router();

devRouter.get('/', (req, res) => {
  res.send('dev page');
});

module.exports = devRouter;
