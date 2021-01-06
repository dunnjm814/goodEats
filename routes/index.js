var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = {username: null, emailAddress: null, password: null , confirmedPassword: null}
  res.render("splash", { user });

});

module.exports = router;
