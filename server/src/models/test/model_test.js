const mongoose = require('mongoose');
require('dotenv').config();

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

const testSchema = new mongoose.Schema({
  title: String,
  author: String,
});

console.log(testSchema);
console.log(typeof testSchema);

const Book = mongoose.model('Book', testSchema);

console.log(Book);
console.log(typeof Book);
