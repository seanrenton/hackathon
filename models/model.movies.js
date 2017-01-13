var mongoose = require('mongoose');

var MovieApp= mongoose.Schema({
  movie : {type : Object}
})

module.exports = mongoose.model("MovieApp", MovieApp)