var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/friday13th');

var MovieApp= mongoose.Schema({
  movie : {type : Object},
  rating : Number,
  watched : Boolean
})




module.exports = mongoose.model("MovieApp", MovieApp)