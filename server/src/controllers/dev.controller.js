const Post = require('../models/post');
const User = require('../models/user');

const Nft = require('../models/nft');

const bcrypt = require("bcryptjs");

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


  devNft: async (req, res, next) => {
    try {
      const nfts = await Nft.find({})
        .populate('creator', 'address nickname')
        .populate('owner', 'address nickname'); //find. 이후 populate('writer') => UserSchema 읽기 (구현 X)
      res.json(nfts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  devNftDetail: async (req, res, next) => {
    try {
      const nfts = await Nft.findById(req.params.tokenid)
        .populate('creator', 'address nickname')
        .populate('owner', 'address nickname'); //find. 이후 populate('writer') => UserSchema 읽기 (구현 X)
      res.json(nfts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },



  devSignUp : async (req, res, next) => {
    console.log(req.body)
    const {email, nickname, password } =req.body;
  
    
    try{
      let user = await User.findOne({email});
      if(user){
        return res.json({ errors : [{msg : "User already exists"}] })
      }
      user = new User({
        email,
        nickname,
        password,
      });

      const hashedPassword = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, hashedPassword)

      await user.save();//db 저장

      res.send("SignUp Successed.")
    }catch(error){
      console.error(error.message);
      next(err);
    }
  }

};
