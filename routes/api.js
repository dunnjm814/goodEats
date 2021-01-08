const express = require("express");
const router = express.Router();

const {Review} = require("../db/models");
const { asyncHandler } = require("./utils");


router.post(
  "/recipes/:id(\\d+)/review",
  asyncHandler(async (req, res) => {

    const userId = res.locals.user.id
    const userName = res.locals.user.userName

    const recipeId = req.params.id
    const { revContent, rating } = req.body
    const review = await Review.create({ userId, recipeId, revContent, rating: rating[0] })
    res.json({ review, userName });

  })
);
module.exports = router
