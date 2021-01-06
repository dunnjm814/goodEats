const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let displayLogin = 'hidden'
  if (req.query.redirect) {
     displayLogin = ''
  }
  const user = {userName: null, email: null, password: null , confirmedPassword: null}
  res.render("splash", { user, displayLogin });

});

module.exports = router;
