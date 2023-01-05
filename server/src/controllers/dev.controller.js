const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  devHome: (req, res) => {
    res.send('dev page');
  },

  devUser: async (req, res, next) => {
    try {
      const users = await User.find({}); // user 컬렉션 모두 가져오기

      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  devUserDetail: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userid);
      res.json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  devPost: async (req, res, next) => {
    try {
      const posts = await Post.find({}).populate('writer', 'address nickname'); //find. 이후 populate('writer') => UserSchema 읽기 (구현 X)
      res.json(posts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  devPostDetail: async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postid); // id로 찾기 p
      res.json(post);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  devNft: (req, res) => {},
  devNftDetail: (req, res) => {},
};
