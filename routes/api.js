const express = require("express");
const router = express.Router();

const {Review, Recipe} = require("../db/models");
const { asyncHandler } = require("./utils");

router.post(
  "/recipes/:id(\\d+)/review",
  asyncHandler(async (req, res) => {

    const userId = res.locals.user.id
    const userName = res.locals.user.userName

    const recipeId = req.params.id
    const { revContent, rating } = req.body
    const review = await Review.create({ userId, recipeId, revContent, rating: rating[0] })
    const recipe = await Recipe.findByPk(recipeId)
    const avgRating = recipe.avgRating
    let numReview = recipe.numReview
    let tempSum = avgRating * numReview
    numReview++
    let finalSum = (tempSum + rating[0])
    let finalAvg = Math.ceil(finalSum / numReview)
    await recipe.update({ avgRating: finalAvg, numReviews: numReview }, {
      where: {
        id:recipeId
      }
    })
    res.json({ review, userName, finalAvg });

  })
);
module.exports = router
