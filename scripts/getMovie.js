var imdb = require('imdb-api');
var mongoose = require('mongoose');
var MovieApp = require('../models/model.movies');


var moobie = process.argv[2]
// let movie;
console.log(moobie)
// imdb.get(process.argv[0]).then(
// console.log
// )


let movie;

// Promises!
imdb.getReq({moobie}).then(console.log);
