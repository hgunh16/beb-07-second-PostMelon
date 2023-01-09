const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');

postRouter.get('/', postController.getAllPost);
postRouter.get('/:postid', postController.getPostDetail);

postRouter.post('/write', postController.writePost);

module.exports = postRouter;
