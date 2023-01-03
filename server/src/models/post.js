const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // 제목
  content: { type: String, required: true }, // 내용
  created_at: { type: Date, default: Date.now, required: true }, // 작성시점
  views: { type: Number, required: true }, // 조회수
  writer: { type: String, required: true }, // 글쓴이
});

module.exports = mongoose.model('Post', postSchema);
