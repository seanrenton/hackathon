var bcrypt = require('bcryptjs');
var movieArray = require('../scripts/getMovie');



module.exports = {

findMovies: (req, res) => {

      movieArray.find({}, (err, movies) => {
        if (err) {
          console.log('Could not find movies!')
          return res.send(err)
        } else {
          res.send(movies)
        }
      })
    },
    findOne: (req, res) => {

      movieArray.findOne({}, (err, movie) => {
        if (err) {
          console.log('Could not find movie!')
          return res.send(err)
        } else {
          res.send(movie)
        }
      })
    }
}