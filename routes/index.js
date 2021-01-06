const express = require('express');
const { render } = require('../app.js');
const router = express.Router();
const { restoreUser } = require('../auth.js');
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

/* GET home page. */
router.get('/', csrfProtection, (req, res, next) => {
    //const user = db.User.build();
    if (res.locals.authenticated) {
        return res.redirect('/dashboard')
    }

    const user = { userName: null, email: null, password: null, confirmedPassword: null }
    res.render("splash", {
        title: "Sign-up",
        user,
        token: req.csrfToken(),
    })
});

router.get('/dashboard', csrfProtection, asyncHandler(async(req, res, next) => {
    const userId = res.locals.user.id;
    const user = await db.User.findByPk(userId);
    res.render('dashboard', { user });
}));

module.exports = router;