var User = require('../models/model.users');
var bcrypt = require('bcryptjs')
var movieArray = require('../scripts/getMovie');

module.exports = {


  login: (req, res) => {
    User.findone({ email: req.body.email.toLowerCase() }, (err, user) => {

      if (err) {
        return res.send(err)
      }

      if (!user) {
        return res.send("That username isn't registered.")
      }

      bcrypt.compare(req.body.pass, user.pass, (err, matched) => {

        if (err) {
          return res.send(err)
        }

        if (!matched) {
          return res.send(err)
        }

        req.session.userID = user._id;
        res.send(user);

      })

    })
  },

  get: (req, res) => {
    User.find({}, (err, users) => {

      if (err) {
        console.log("COULDN'T FIND USER OH NO!")
        return res.send(err)
      }

      res.send(users);

    })
  },

  create: (req, res) => {

    req.body.email = req.body.email.toLowerCase();
    var newUser = new User(req.body);

    newUser.save((err, doc) => {
      if (err) {
        return res.send(err)
      }
      req.session.userID = doc._id
      res.send(doc)
    });

    findMovies: (req, res) => {

      movieArray.find({}, (err, movies) => {
        if (err) {
          console.log('Could not find movies!')
          return res.send(err)
        } else {
          res.send(movies)
        }
      })
    }
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

}