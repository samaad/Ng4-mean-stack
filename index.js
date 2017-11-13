const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('Could not connect to database: ', err);
  }else{
    console.log('Connected to databsae: ', config.db);
  } 
});


app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client/dist'));
app.use('/authentication', authentication);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//http:
app.listen(3020, () => {
  console.log("Listening on port 3020");
});
