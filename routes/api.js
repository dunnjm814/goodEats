const express = require("express");
const router = express.Router();

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const createReview = db.Review
router.post(
  "/recipes/:id(\\d+)/review",
  asyncHandler(async (req, res, next) => {
    // console.log(res.locals.user.id)
    const userId = res.locals.user.id
    const userName = res.locals.user.userName
    console.log('CONSOLELOG')
    // console.log(userId)
    // let userId = 5
    const recipeId = req.params.id
    const { revContent, rating } = req.body
    const review = await createReview.create({ userId, recipeId, revContent, rating: rating[0] })
    res.json({ review, userName });
    // res.send("test")
    // res.end()
  })
);
module.exports = router
