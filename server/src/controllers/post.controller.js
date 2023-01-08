const Post = require('../models/post');
const User = require('../models/user');
const blockchain = require('../blockchain');

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
    try {
      const { title, content, writer } = req.body;
      console.log(title, content, writer);

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
      const result = await blockchain.getToken(user.address);

      return res.status(200).send('post complete');
    } catch (err) {
      console.error(err);
    }
  },
};
