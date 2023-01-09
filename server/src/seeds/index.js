require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const setPost = require('./seed.post');
const setUser = require('./seed.user');
const setNft = require('./seed.nft');

//변수세팅
if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true);
}
mongoose.set('strictQuery', false);

//연결
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'dev',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

//에러처리
mongoose.connection.on('error', (error) => {
  console.error('connection error', error);
});

// setUser().then(() => {
//   console.log('seed user insert complete');
// });

setPost().then(() => {
  console.log('seed post insert complete');
});

setNft().then(() => {
  console.log('seed nft insert complete');
});
