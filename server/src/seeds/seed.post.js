// dummy data 생성하는 파일
const Post = require('../models/post');
const mongoose = require('mongoose');

//dummy data
const seedPost = [
  {
    title: '음악에 미치다',
    content: '음악은 너무 재밌다 더 듣고 싶다 좋은 노래 있으면 공유해주세요',
    views: 135,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d92'),
  },
  {
    title: '내가 좋아하는 음악 best 10',
    content: '1. music1 2. music2 3. music3',
    views: 291,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d93'),
  },
  {
    title: '지칠 때 잠깐의 휴식을 주는 노래들',
    content: 'in the forest, flying to the sky',
    views: 16472,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d94'),
  },
  {
    title: '가수 아무개의 노래에 대한 고찰',
    content: '이 가수는 완벽 그 자체입니다. 안들은 사람 100번 더 들으세요',
    views: 4,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d92'),
  },
  {
    title: '최신곡 이거 좋아도 너무 좋은거 아니야?',
    content: '올드진스는 전설이다..',
    views: 4170,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d94'),
  },
  {
    title: 'rock 하시는분들 기타 모델 추천입니다 당신의 기타를 마련하세요',
    content: '역시 기타는 빨간기타지~',
    views: 17,
    writer: mongoose.mongo.ObjectId('63b86fbd21bc2b2c2da94d92'),
  },
];

//데이터를 전부 지우고 다시 초기 데이터로 넣기
const seedPostDB = async () => {
  await Post.deleteMany({});
  await Post.insertMany(seedPost.map((el) => new Post(el)));
};

module.exports = seedPostDB;
