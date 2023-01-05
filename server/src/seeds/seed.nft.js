const mongoose = require('mongoose');
const Nft = require('../models/nft');

const seedNft = [
  {
    contract_address: 'abcdefg',
    name: 'dog',
    description: 'happy dog',
    image_link:
      'https://post-melon.s3.ap-northeast-1.amazonaws.com/crystal.jpg',
    price: 0.01,
    creator: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a7'),
    owner: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a7'),
  },
  {
    contract_address: 'abcdefg',
    name: 'puppy',
    description: 'my puppy so cute',
    image_link: 'https://post-melon.s3.ap-northeast-1.amazonaws.com/dog2.jpg',
    price: 0.02,
    creator: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a7'),
    owner: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a8'),
  },
  {
    contract_address: 'abcdefg',
    name: 'crystal',
    description: 'big crystal',
    image_link:
      'https://post-melon.s3.ap-northeast-1.amazonaws.com/crystal.jpg',
    price: 0.05,
    creator: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a9'),
    owner: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a7'),
  },
  {
    contract_address: 'abcdefg',
    name: 'mom dog',
    description: 'what a kind dog!',
    image_link:
      'https://post-melon.s3.ap-northeast-1.amazonaws.com/download.jpg',
    price: 0.01,
    creator: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a8'),
    owner: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a8'),
  },
  {
    contract_address: 'abcdefg',
    name: 'game',
    description: 'joystick, i like this game',
    image_link: 'https://post-melon.s3.ap-northeast-1.amazonaws.com/gaming.jpg',
    price: 0.03,
    creator: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a7'),
    owner: mongoose.mongo.ObjectId('63b63d921225e1ff1cda00a9'),
  },
];

const seedNftDB = async () => {
  await Nft.deleteMany({});
  await Nft.insertMany(seedNft.map((el) => new Nft(el)));
};

module.exports = seedNftDB;
