const { request } = require('express');
const db = require('./db/models');

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    }
};

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {

        return res.redirect('/?redirect=true')
    }
    return next()
}
// const authorize = (req, res, next) => {
//   if (!req.session.auth) {
//     const err = new Error("Cannot perform this action");
//     err.title = "Not authorized to view this resource.";
//     err.status = 403;
//     next(err);
//   }
//   next();
// };


const restoreUser = async(req, res, next) => {
    if (req.session.auth) {
        const { userId } = req.session.auth
        try {
            const user = await db.User.findByPk(userId)
            if (user) {
                res.locals.authenticated = true
                res.locals.user = user
                next()
            }
        } catch (err) {
            res.locals.authenticated = false
            next(err)
        }
    } else {
        res.locals.authenticated = false
        next()
    }
}


module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth,
};
