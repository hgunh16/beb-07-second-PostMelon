const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  contract_address: { type: String, required: true },
  name: { type: String, required: true }, // 작품명
  description: { type: String, required: true }, //설명
  image_link: { type: String, required: true }, //이미지 주소
  price: { type: Number, requied: true }, // 가격
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // 소유주
});

module.exports = mongoose.model('Nft', nftSchema);
