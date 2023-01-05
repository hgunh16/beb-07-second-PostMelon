const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // 제목
  content: { type: String, required: true }, // 내용
  created_at: { type: Date, default: Date.now, required: true }, // 작성시점
  views: { type: Number, required: true, default: 0 }, // 조회수, 기본 0시작
  writer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // 글쓴이, userSchema의 ObjectId를 Ref
});

module.exports = mongoose.model('Post', postSchema);
