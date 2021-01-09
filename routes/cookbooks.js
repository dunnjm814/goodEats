const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const nameValidators = [
    check('new-cookbook-name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name.')
    .isLength({ max: 50 })
    .withMessage('Name was over 50 characters')
];

router.get('/', nameValidators, csrfProtection, asyncHandler(async(req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/')
    }

    const user = await db.User.findByPk(userId);
    const cookBooks = await db.CookBook.findAll({
        where: {
            userId: userId
        },
        include: db.Recipe
    });

    cookBooks.forEach(cookBook => {
        cookBook.Recipes.forEach(recipe => {
            if (!recipe.cooked) {
                if (!cookBook.uncooked) {
                    cookBook.uncooked = 1;
                } else {
                    cookBook.uncooked++;
                }
            }

        })
    })

    res.render('user-cookbooks', { user, cookBooks });
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

        res.render('cookbook', {
            cookBook,
        });
    })
);

router.post(
    '/',
    csrfProtection,
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const userId = res.locals.user.id;
            const { name } = req.body;
            const newBook = await db.CookBook.create({
                userId: userId,
                name: name
            });
            res.render('')

            const { name } = req.body;
            const userId = res.locals.user.id;
            const cookBook = await db.CookBook.findByPk(pullCookbook, {
                include: db.Recipe
            });

            const user = await db.User.findByPk(userId);
            const cookBooks = await db.CookBook.findAll({
                where: {
                    userId: userId
                },
                include: db.Recipe
            });

            cookBooks.forEach(cookBook => {
                cookBook.Recipes.forEach(recipe => {
                    if (!recipe.cooked) {
                        if (!cookBook.uncooked) {
                            cookBook.uncooked = 1;
                        } else {
                            cookBook.uncooked++;
                        }
                    }

                })
            })

            res.render('user-cookbooks', { user, cookBooks, errors });

        }
    })
);

module.exports = router;