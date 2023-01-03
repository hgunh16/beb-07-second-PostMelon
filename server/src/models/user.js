const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  token_amount: { type: Number, required: true },
  eth_amount: { type: Number, required: true },
  created_at: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('User', userSchema);
