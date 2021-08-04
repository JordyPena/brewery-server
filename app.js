const express = require('express');
const morgan = require('morgan');

const app = express();
//middleware used to log in terminal
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express second attempt!');
})

app.listen((8000), () => {
  console.log('Express server is listening on port 8000!');
})