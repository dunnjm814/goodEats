const express = require("express");
const router = express.Router();

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");

router.get(
    "/:id(\\d+)",
    csrfProtection,
    requireAuth,
    asyncHandler(async(req, res) => {
        const pullRecipe = parseInt(req.params.id, 10);
        const recipe = await db.Recipe.findByPk(pullRecipe, {
            include: { model: db.Review, include: { model: db.User } },
        });
        const userId = res.locals.user.id;
        const user = await db.User.findByPk(userId);

        const recipeReviews = recipe.Reviews;
        let recipeDescriptions;
        if (recipe.description) {
            recipeDescriptions = recipe.description.split("&%");
        } else {
            recipeDescriptions = "";
        }

        let recipeIngredients = recipe.ingredients.split("&%");
        let recipeDirections = recipe.directions.split("&%");

        const cookBooks = await db.CookBook.findAll({
            where: {
                userId: userId,
            },
            include: db.Recipe,
            order: [
                ["updatedAt", "DESC"]
            ],
        });
        res.render("recipe", {
            user,
            recipe,
            recipeIngredients,
            recipeDirections,
            recipeReviews,
            recipeDescriptions,
            cookBooks,
        });
    })
);
router.post(
    "/add",
    asyncHandler(async(req, res) => {
        if (!res.locals.authenticated) {
            return res.redirect("/");
        }
        let userId = res.locals.user.id;
        let { addRecipe, cookBookName } = req.body;
        addRecipe = parseInt(addRecipe);
        currentBook = parseInt(cookBookName);
        if (userId !== 5) {
            await db.CookBookRecipe.create({
                cookBookId: currentBook,
                recipeId: addRecipe,
                cooked: false
            });
        }
        res.redirect(`/cookbooks/${currentBook}`);
    })
);

module.exports = router;