var User = require('../models/model.users');
var bcrypt = require('bcryptjs')

module.exports = {
  
  
  login : (req, res) => {
    User.findone({email : req.body.email.toLowerCase()}, (err, user)=>{
      
      if(err){
        return res.send(err)
      }
      
      if(!user){
        return res.send("That username isn't registered.")
      }
      
      bcrypt.compare(req.body.pass, user.pass, (err, matched)=>{
        
        if(err){
          return res.send(err)
        }
        
        if(!matched){
          return res.send(err)
        }
        
        req.session.userID = user._id;
        res.send(user);
        
      })
      
    })
  },
  
  get : (req, res) => {
    User.find({}, (err, users)=>{
      
      if(err) {
        console.log("COULDN'T FIND USER OH NO!")
        return res.send(err)
      }
      
      res.send(users);
      
    })
  },
  
  create : (req, res) => {
    
    req.body.email = req.body.email.toLowerCase();
    var newUser = new User(req.body);
    
    newUser.save((err, doc) => {
      if(err){
        return res.send(err)
      }
      req.session.userID = doc._id
      res.send(doc)
    });
    
  }
  
}