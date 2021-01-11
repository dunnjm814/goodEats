const express = require("express");
const router = express.Router();

const { Review, Recipe } = require("../db/models");
const { asyncHandler } = require("./utils");

router.post(
    "/recipes/:id(\\d+)/review",
    asyncHandler(async(req, res) => {

        const userId = res.locals.user.id
        const userName = res.locals.user.userName

        const recipeId = req.params.id
        const { revContent, rating } = req.body
        let review;

        if (userId !== 5) {
            review = await Review.create({ userId, recipeId, revContent, rating: rating[0] })
        }

        const recipe = await Recipe.findByPk(recipeId)
        const avgRating = recipe.avgRating
        let numReview = recipe.numReviews
        let tempSum = avgRating * numReview
        numReview++
        let rateFromForm = parseInt(rating[0], 10)
        let finalSum = (tempSum + rateFromForm)
        let finalAvg = Math.ceil(finalSum / numReview)

        if (userId !== 5) {
            await recipe.update({ avgRating: finalAvg, numReviews: numReview }, {
                where: {
                    id: recipeId
                }
            })
        }

        if (userId !== 5) {
            return res.json({ review, userName, finalAvg });
        }

        res.redirect(`/recipes/${recipeId}`)

    })
);

router.delete(
    `/reviews/:id(\\d+)`,
    asyncHandler(async(req, res) => {
        const reviewId = req.params.id
        console.log(reviewId)
        await Review.destroy({
            where: {
                id: reviewId
            }
        })
        await res.json({ reviewId })
    })
);

module.exports = router