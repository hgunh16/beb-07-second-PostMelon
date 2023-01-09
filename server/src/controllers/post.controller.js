const Post = require('../models/post');
const User = require('../models/user');
const tokenUtil = require('../blockchain/token');
const jwt = require('jsonwebtoken');

module.exports = {
  getAllPost: async (req, res, next) => {
    try {
      const posts = await Post.find({}).populate('writer', 'address nickname'); //find. 이후 populate('writer') => UserSchema 읽기
      res.json(posts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  getPostDetail: async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postid).populate(
        'writer',
        'address nickname'
      ); // id로 찾기 p
      res.json(post);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  writePost: async (req, res) => {

    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ data: null, message: 'invalid access token' });
    }

    try {
      const token = authorization.split(' ')[1];
      console.log(token);
      const data = jwt.verify(token, process.env.ACCESS_SECRET);

      if(data){
        const { title, content, writer } = req.body;

      if (!title || !content || !writer) {
        return res.status(400).send('body error');
      }

      const post = new Post({
        title,
        content,
        writer,
      });

      const user = await User.findById(writer);
      console.log('user : ', user);

      await post.save();
      const result = await tokenUtil.givePostToken(user.address);
      const balance = await tokenUtil.getBalance(user.address);
      console.log(balance);

      return res.status(200).send('post complete');
      }

      return res.status(400).json({ data: null, message: 'invalid access token' });

      
    } catch (err) {
      console.error(err);
    }
  },
};
