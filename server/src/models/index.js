const { default: mongoose } = require('mongoose');

require('dotenv').config();

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch((e) => console.error(e));

  mongoose.connection.on('error', (error) => {
    console.error('connection error', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.error('disconnected. retry now...');
    connect();
  });
};

module.exports = connect;
