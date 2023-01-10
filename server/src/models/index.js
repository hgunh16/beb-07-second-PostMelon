const { default: mongoose } = require('mongoose');

//환경변수 사용
require('dotenv').config();

const connect = () => {
  //변수 세팅
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.set('strictQuery', false);

  //연결
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: process.env.NODE_ENV !== 'production' ? 'gh_test' : 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch((e) => console.error(e));

  //에러 핸들링
  mongoose.connection.on('error', (error) => {
    console.error('connection error', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.error('disconnected. retry now...');
    connect();
  });
};

module.exports = connect;
