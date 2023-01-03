const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  contract_address: { type: String, required: true },
  owner: { type: String, required: true }, // 소유주
  name: { type: String, required: true }, // 작품명
  description: { type: String, required: true }, //설명
  image_link: { type: String, required: true }, //이미지 주소
  price: { type: Number, requied: true }, // 가격
});

module.exports = mongoose.model('Nft', nftSchema);
