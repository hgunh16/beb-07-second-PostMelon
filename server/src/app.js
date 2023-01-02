//import
const express = require('express');
require('dotenv').config();

//middleware import
const cors = require('cors');

//router import
const router = require('routes');

//setting
const app = express();
app.set('port', process.env.PORT || 4001);

//routes

app.use('/', (req, res) => {
  res.send('hello!');
});

app.use('/dev', router.devRouter);
app.use('/user', router, userRouter);

app.app.listen(PORT, () => {
  console.log(`server is listening at PORT : ${PORT}`);
});
