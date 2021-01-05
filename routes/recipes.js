const express = require("express")
const router = express.router

const db = require("../db/models")
const { csrfProtection, asyncHandler } = require("./utils")

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const pullRecipe = parseInt(req.params.id, 10)
  const recipe = await db.Recipe.findByPk(pullRecipe, /* {include: anything?}*/)
  let recipeIngredients = recipe.ingredients.split('&%')
  let recipeDirections = recipe.directions.split('&%')
  res.render('recipe', {recipe, recipeIngredients, recipeDirections})
}))

module.exports = router
