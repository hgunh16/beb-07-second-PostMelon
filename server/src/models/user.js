const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, trim: true },
  token_amount: { type: Number,  },
  eth_amount: { type: Number,  },
  created_at: { type: Date, default: Date.now, required: true },
  //collected post - object id 배열
  //favorited post - object id 배열
  //created post - object id 배열
});

module.exports = mongoose.model('User', userSchema);
