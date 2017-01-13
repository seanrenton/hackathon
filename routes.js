var Users = require('./controllers/controllers.users'),
    express = require('express');
    User = require('./models/models.users')

    module.exports = (app) => {
        
        app.get('/logout', (req, res)=> {
            req.session.reset();

            res.redirect('/')
        });
        app.get('/api/me', (req, res)=>{
            User.findOne({_id : req.session.userID},
            (err, user)=>{
                res.send(user)
            })
        })

        app.get('/api/movies', Middleware.isLoggedIn, Users.get)

        app.post('/index', Users.login);

        app.post('/index', Users.create);

        app.use(express.static('public'));
    };