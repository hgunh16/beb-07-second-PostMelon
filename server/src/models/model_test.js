const mongoose = require('mongoose');
const User = require('./user');

if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true);
}
mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://pmAdmin:JSG5WLLxOQWiQkgE@postmelon.8yk0g0d.mongodb.net/?retryWrites=true&w=majority',
    {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

const user = new User({
  email: 'test@gmail.com',
  nickname: 'goodboy',
  password: '1234',
  address: 'a1b2c3',
  token_amount: 0,
  eth_amount: 0,
});

user.save();

console.log(user);
