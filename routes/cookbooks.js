const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const nameValidators = [
    check('newCookbookName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name')
    .isLength({ max: 50 })
    .withMessage('Name must be under 50 characters')
];

router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/')
    }

    const userId = res.locals.user.id;

    const user = await db.User.findByPk(userId);
    const cookBooks = await db.CookBook.findAll({
        where: {
            userId: userId
        },
        include: db.Recipe,
        order: [
            ['updatedAt', 'DESC']
        ]
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

    res.render('user-cookbooks', { user, cookBooks, token: req.csrfToken() });
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
            include: db.Recipe,
            order: [
                ['updatedAt', 'DESC']
            ]
        });

        res.render('cookbook', {
            cookBook,
        });
    })
);

router.post(
    '/',
    nameValidators,
    csrfProtection,
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const userId = res.locals.user.id;
            const name = req.body.newCookbookName;
            const newBook = await db.CookBook.create({
                userId,
                name
            });
            return res.redirect('/cookbooks')
        }

        const userId = res.locals.user.id;
        const user = await db.User.findByPk(userId);
        const cookBooks = await db.CookBook.findAll({
            where: {
                userId: userId
            },
            include: db.Recipe,
            order: [
                ['updatedAt', 'DESC']
            ]
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

        const errors = validatorErrors.array().map((error) => error.msg);


        console.log(errors)

        res.render('user-cookbooks', { errors, user, cookBooks, token: req.csrfToken() })

    })
);

router.post(
    '/delete',
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }

        const cookBookId = parseInt(req.body.deleteCookbook);

        await db.CookBookRecipe.destroy({
            where: {
                cookBookId
            }
        });

        await db.CookBook.destroy({
            where: {
                id: cookBookId
            }
        });

        res.redirect('/cookbooks');
    })
);

router.post(
    '/recipe/delete',
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }

        let { deleteRecipe, currentBook } = req.body;
        deleteRecipe = parseInt(deleteRecipe);
        currentBook = parseInt(currentBook);

        await db.CookBookRecipe.destroy({
            where: {
                cookBookId: currentBook,
                recipeId: deleteRecipe
            }
        });

        res.redirect(`/cookbooks/${currentBook}`);
    })
);

router.post(
    '/recipe/cook',
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect('/')
        }

        let { updateRecipe, currentBook } = req.body;
        deleteRecipe = parseInt(updateRecipe);
        currentBook = parseInt(currentBook);

        const changeRecipe = await db.CookBookRecipe.findOne({
            where: {
                cookBookId: currentBook,
                recipeId: updateRecipe
            }
        });

        if (changeRecipe.cooked) {
            changeRecipe.cooked = false;
        } else {
            changeRecipe.cooked = true;
        }

        await changeRecipe.save();

        res.redirect(`/cookbooks/${currentBook}`);
    })
);

module.exports = router;