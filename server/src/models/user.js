const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  token_amount: { type: Number, default: 0 },
  eth_amount: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now, required: true },
  created_posts: { type: [ObjectId], default: [], ref : 'Post' },
  favorited_posts: { type: [ObjectId], default: [] },
  collected_nfts: { type: [ObjectId], default: [] },
  favorited_nfts: { type: [ObjectId], default: [] },
  created_nfts: { type: [ObjectId], default: [] },
});

userSchema.pre('save', async function (next) {
  const user = this;

  try {
    //hash작업
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = mongoose.model('User', userSchema);
