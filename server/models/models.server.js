var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds119692.mlab.com:19692/heroku_fm6kwhbp'; // use yours
}

// vwv__________connection string____________________________
// mongodb://<dbuser>:<dbpassword>@ds119692.mlab.com:19692/heroku_fm6kwhbp


var mongoose = require("mongoose");

var db = mongoose.connect(connectionString);

module.exports = db;
