const express = require('express');
const { render } = require('../app.js');
const router = express.Router();
const { restoreUser } = require('../auth.js');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


/* GET home page. */
router.get('/', csrfProtection, (req, res, next) => {

    let displayLogin = 'hidden'
    if (req.query.redirect) {
        displayLogin = ''
    }

    if (res.locals.authenticated) {
        return res.redirect('/dashboard')
    }

    const user = { userName: null, email: null, password: null, confirmedPassword: null }
    res.render('splash', {
        title: 'Sign-up',
        user,
        displayLogin,
        token: req.csrfToken(),
    });
});

router.get('/dashboard', csrfProtection, asyncHandler(async(req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/')
    }
    const userId = res.locals.user.id
    const user = await db.User.findByPk(userId);
    const recipes = await db.Recipe.findAll();
    res.render('dashboard', { user, recipes });

}));

module.exports = router;