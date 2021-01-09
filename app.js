const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// import environment with ./config?
const { sessionSecret } = require('./config')
const { restoreUser } = require('./auth')
const apiRouter = require('./routes/api')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes')
const cookbooksRouter = require('./routes/cookbooks')

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
    session({
        name: 'good-eats.sid',
        secret: sessionSecret,
        store,
        saveUninitialized: false,
        resave: false,
    })
);



// create Session table if it doesn't already exist
store.sync();

app.use(restoreUser)
app.use('/api', apiRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter)
app.use('/cookbooks', cookbooksRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;