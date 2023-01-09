const User = require('../models/user');

const seedUser = [
  {
    email: 'test@test.com',
    nickname: '테스트',
    password: '1q2w3e4r',
    address: '0xBFc8927221C677Dc4C9a21F8843405330420D58D',
    token_amount: 1000000,
    eth_amount: 1000000,
    created_posts: [],
    favorited_posts: [],
    collected_nfts: [],
    favorited_nfts: [],
    created_nfts: [],
  },
  {
    email: 'project2@gmail.com',
    nickname: 'incentive',
    password: 'comunity',
    address: '0xFb4eCE13AFE8A873B618Ef3FAcC1bEdA03241EDb',
    token_amount: 2000000,
    eth_amount: 30000000,
    created_posts: [],
    favorited_posts: [],
    collected_nfts: [],
    favorited_nfts: [],
    created_nfts: [],
  },
  {
    email: 'codestates@codestates.com',
    nickname: 'codestates',
    password: 'beb07',
    address: '0xF997d70667FD7B7FD00607679c4620f9D8c89765',
    token_amount: 123456789,
    eth_amount: 987654321,
    created_posts: [],
    favorited_posts: [],
    collected_nfts: [],
    favorited_nfts: [],
    created_nfts: [],
  },
];

const seedUserDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUser.map((el) => new User(el)));
};

module.exports = seedUserDB;
