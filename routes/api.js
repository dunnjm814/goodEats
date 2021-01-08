const express = require("express");
const router = express.Router();

const db = require("../db/models");
const { asyncHandler } = require("./utils");

const createReview = db.Review
router.post(
  "/recipes/:id(\\d+)/review",
  asyncHandler(async (req, res) => {

    const userId = res.locals.user.id
    const userName = res.locals.user.userName

    const recipeId = req.params.id
    const { revContent, rating } = req.body
    const review = await createReview.create({ userId, recipeId, revContent, rating: rating[0] })
    const recipe = await db.Recipe.findByPk(recipeId)
    const avgRating = recipe.avgRating
    let numReview = recipe.numReview
    let tempSum = avgRating * numReview
    numReview++
    let finalSum = (tempSum + rating[0])
    let finalAvg = Math.ceil(finalSum / numReview)
    await db.Recipe.update({ avgRating: finalAvg, numReviews: numReview }, {
      where: {
        id:recipeId
      }
    })
    res.json({ review, userName, finalAvg });

  })
);
module.exports = router
