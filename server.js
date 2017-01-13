var express = require('express'),
    bodyParser = require('body-parser'),
    loggers = require('morgan')('dev'),
    mongoose = require('mongoose').connect('mongodb://localhost/friday13th', (mongooseErr) => {
        if( mongooseErr ) {
            console.error('#ERROR')
        } else {
            console.info( 'Mongoose initialized' );
        }
    }),

    sessions = require('client-sessions')({
        cookieName: 'auth',

        secret: 'Scary',

        requestKey: 'session',

        cookie: {
            ephemeral: false,

            httpOnly: true,

            secure: false
        }
    }),

    PORT = process.env.PORT || 8080,

    Routes = require('./routes'),

    app = express();

    app.use(
        logger,
        sessions,
        bodyParser.json(),
        bodyParser.urlencoded({
            extended: true
        }),
        (req, res, next) => {
            console.log('SESSION : ',
            `${req.session.uid}`);
            next();
        }
    );

    Routes(app);


    app.listen(PORT, (err) => {
        if(err) {
            console.error('#ERROR');

        }else {
            console.log('MEAN auth Server running!', 'PORT:', PORT);
        }
    });