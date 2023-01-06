const express = require('express');
const devController = require('../controllers/dev.controller');
const devRouter = express.Router();

devRouter.get('/', devController.devHome);
devRouter.get('/users', devController.devUser);
devRouter.get('/users/:userid', devController.devUserDetail);
devRouter.get('/posts', devController.devPost);
devRouter.get('/posts/:postid', devController.devPostDetail);
devRouter.get('/nfts', devController.devNft);
devRouter.get('/nfts/:tokenId', devController.devNftDetail);
devRouter.post('/signup', devController.devSignUp);

module.exports = devRouter;
