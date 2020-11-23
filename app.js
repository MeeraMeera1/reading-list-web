//step 2: set up the app

const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));

app.use(routes);

app.use((req,res,next) => {
    const error = new Error('The requested page couldn\'t be found.');
    error.status = 404;
    next(err);
});

module.exports = app;
