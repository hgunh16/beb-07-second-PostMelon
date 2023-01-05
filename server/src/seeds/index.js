require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const setPost = require('./seed.post');
const setUser = require('./seed.user');

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

setPost().then(() => {
  console.log('seed insert complete');
});

// setUser().then(() => {
//   console.log('seed insert complete');
// });
