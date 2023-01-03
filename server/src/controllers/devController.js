const Post = require('../models/post');

module.exports = {
  devHome: (req, res) => {
    res.send('dev page');
  },
  devUser: (req, res) => {},
  devUserDetail: (req, res) => {},
  devPost: async (req, res, next) => {
    try {
      const posts = await Post.find({}); // posts 컬렉션 모두 가져오기
      res.json(posts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  devPostDetail: async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postid); // id로 찾기
      res.json(post);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  devNft: (req, res) => {},
  devNftDetail: (req, res) => {},
};
