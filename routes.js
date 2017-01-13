var Auth = require('./controllers.users'),
    express = require('express');

    module.exports = (app) => {
        app.get('/logout', Auth.logout);

        app.post('/login', Auth.login);

        app.post('/register', Auth.register);

        app.use(express.static('public'));
    };