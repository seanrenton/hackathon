var Users = require('./models/models.users')

module.exports = {
    isLoggenIn : (req, res, next)=> {
        if(req.session.userID){
            next()
        } else {
            res.status(403).send('This way to death!');
        }
    }
}
