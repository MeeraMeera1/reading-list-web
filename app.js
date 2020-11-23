//step 2: set up the app

const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));

app.use(routes);

//error handler to catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const error = new Error('The requested page couldn\'t be found.');
    error.status = 404;
    next(error);
});

//error handler to log errors
app.use((error, req, res, next) => {
    if(process.env.NODE_ENV === 'production'){
        //todo log the error to the database
    } else {
        console.error(err);
    }
})



module.exports = app;
