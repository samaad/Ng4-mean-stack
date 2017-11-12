const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('Could not connect to database: ', err);
  }else{
    console.log('Connected to databsae: ', config.db);
  } 
});


app.use(express.static(__dirname+'/client/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//http:
app.listen(3020, () => {
  console.log("Listening on port 3020");
});
