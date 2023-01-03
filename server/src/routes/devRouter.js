const express = require('express');
const devController = require('../controllers/devController');
const devRouter = express.Router();

devRouter.get('/', devController.devHome);
devRouter.get('/user', devController.devUser);
devRouter.get('/user/:userid', devController.devUserDetail);
devRouter.get('/posts', devController.devPost);
devRouter.get('/posts/:postid', devController.devPostDetail);
devRouter.get('/nfts', devController.devNft);
devRouter.get('/nfts/:tokenId', devController.devNftDetail);

module.exports = devRouter;
