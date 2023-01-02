//import
const express = require('express');
require('dotenv').config();

//middleware import
const cors = require('cors');

//router import
const router = require('./routes');

//setting
const app = express();
app.set('port', process.env.PORT || 4001);

//routes
app.use('/dev', router.devRouter);
app.use('/user', router.userRouter);
app.use('/', (req, res) => {
  res.send('hello!');
});

app.listen(app.get('port'), () => {
  console.log(`server is listening at PORT : ${app.get('port')}`);
});
