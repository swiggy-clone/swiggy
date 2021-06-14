const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const user = require('./routes/user');
const port = process.env.PORT || 5000;
const restaurant = require('./routes/restaurant');


const app = express();
app.use(bodyParser.json());
const url = process.env.DB_URI;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!')
});
mongoose.set('debug', true);
// Adding random number of users
app.use('/users', user);
app.use('/restaurants', restaurant);

app.get('/', (req, res) =>{

  res.send('hi!');
});

app.listen(port,(err)=>{
  if(err)
  console.log(err);
  else {
    console.log(`listening at ${port}`);
  }
});
