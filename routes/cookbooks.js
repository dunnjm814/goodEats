const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/')
    }
    const userId = res.locals.user.id
    const user = await db.User.findByPk(userId);
    const cookBooks = await db.CookBook.findAll({
        where: {
            userId: userId
        },
        include: db.Recipe
    });

    res.render('cookbooks', { user, cookBooks });
}));

router.get(
    '/:id(\\d+)',
    csrfProtection,
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }
        const userId = res.locals.user.id;
        const pullCookbook = req.params.id;
        const cookBook = await db.CookBook.findByPk(pullCookbook, {
            include: db.Recipe
        });

        console.log(cookBook.Recipes)
        console.log(cookBook.Recipes[0].CookBookRecipes)

        res.render('cookbook', {
            cookBook,
        });
    })
);

module.exports = router;