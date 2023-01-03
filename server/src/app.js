//import
const express = require('express');
require('dotenv').config();

//middleware import
const cors = require('cors');

//router import
const router = require('./routes');

//db import
const connect = require('./models');

//setting
const app = express();
app.set('port', process.env.PORT || 4001);

//middleware setting
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/dev', router.devRouter);
app.use('/user', router.userRouter);
app.use('/', (req, res) => {
  res.send('hello!');
});

//error handler

// app.use((req, res, next) => {
//   res.status(404).send('Not Found!');
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send({
//     message: 'Internal Server Error',
//     stacktrace: err.toString(),
//   });
// });

//db connection

connect();

//server listen

// if (process.env.NODE_ENV !== "test") {
//   app.listen(port, () => {
//     console.log(`[RUN] StatesAirline Server... | http://localhost:${port}`);
//   });
// }

app.listen(app.get('port'), () => {
  console.log(`server is listening at PORT : ${app.get('port')}`);
});
