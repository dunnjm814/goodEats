const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render("user-signup", {
    title: "Sign-up",
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for user name.")
    .isLength({ max: 50 })
    .withMessage("User name must not be more than 50 characters long.")
    .custom((value) => {
      return db.User.findOne({ where: { userName: value } }).then((user) => {
        if (user) {
          return Promise.reject("That user name is already taken.");
        }
      });
    }),
  check("emailAddress")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address.")
    .isLength({ max: 100 })
    .withMessage("Email address must not be more than 100 characters long.")
    .isEmail()
    .withMessage("The email address entered is not valid.")
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "That email address is already used by another account."
            );
          }
        }
      );
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password.")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*").'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password.")
    .isLength({ max: 50 })
    .withMessage(
      "Password confirmation must not be more than 50 characters long."
    )
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];

router.post(
  "/signup",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { userName, emailAddress, password } = req.body;

    const user = db.User.build({
      userName,
      emailAddress,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      // needs to redirect to dashboard or wherever we want to redirect to after signup
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-signup", {
        title: "Sign-up",
        user,
        errors,
        csrfToken: req.csrfToken()
      });
    }
  })
);
module.exports = router;
