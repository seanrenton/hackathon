var mongoose = require('mongoose');
var bcrypt = require('bycryptjs')

mongoose.connect('mongodb://localhost/friday13th');

var User = mongoose.schema({
  email : {type : String, required : true, unique : true},
  pass : {type : String, required : true},
  
  ratings : {type : Object},
  
  dateJoined : {type : Number, default : ()=>{return Date.now()}}

});


User.pre('save', function(next) {
    var user = this;

  if( !user.isModified('pass') ) {
        return next();
    }

  bcrypt.genSalt(11, (saltErr, salt) => { 
        if(saltErr) {
            return next(saltErr);
        }

        console.info('SALT generated!', salt);

        bcrypt.hash(user.pass, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                return next(hashErr);
            }
            user.pass = hashedPassword;
            next();
        });
    });
});

module.exports = mongoose.model("User", User);