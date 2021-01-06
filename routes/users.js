const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser } = require('../sign-in-auth.js')

/* GET users listing. */

router.get("/", function(req, res) {
    const user = { userName: null, email: null, password: null, confirmedPassword: null }
    res.render("splash", { user });
});

router.get("/splash", csrfProtection, (req, res) => {
    //const user = db.User.build();
    const user = { userName: null, email: null, password: null, confirmedPassword: null }
    res.render("splash", {
        title: "Sign-up",
        user,
        token: req.csrfToken(),
    });

});

const loginValidators = [
    check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address.")
    .isEmail()
    .withMessage("The email address entered is not valid."),
    check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password.")
];

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
    check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address.")
    .isLength({ max: 100 })
    .withMessage("Email address must not be more than 100 characters long.")
    .isEmail()
    .withMessage("The email address entered is not valid.")
    .custom((value) => {
        return db.User.findOne({ where: { email: value } }).then(
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

router.post('/login', loginValidators, csrfProtection, asyncHandler(async(req, res, next) => {
    const { email, password } = req.body;
    const errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const user = await db.User.findOne({
            where: {
                email
            }
        })
        if (user !== null) {
            const passwordMatch = await bcrypt.compare(password, user.hashPass.toString())
                //HASHED PASSWORD?
            if (passwordMatch) {
                loginUser(req, res, user);
                return res.redirect(`/dashboard`)
            }
        }
        errors.push('Login Failed');

    } else {
        errors = validatorErrors.array().map((error) => error.message)
    }
    res.render('splash', { user, token: req.csrfToken() })
}));

router.post(
    "/signup",
    csrfProtection,
    userValidators,
    asyncHandler(async(req, res) => {
        const { userName, email, password } = req.body;

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const user = db.User.build({
                userName,
                email,
            });
            const hashPass = await bcrypt.hash(password, 10);
            user.hashPass = hashPass;
            await user.save();
            loginUser(req, res, user);
            // needs to redirect to dashboard or wherever we want to redirect to after signup
            res.redirect(`/dashboard`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("splash", {
                title: "Sign-up",
                user,
                errors,
                token: req.csrfToken()
            });
        }
    })
);

router.post('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/')
});

module.exports = router;