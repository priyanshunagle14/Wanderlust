const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//signUP
router.route("/signup")
.get(userController.renderSignUpForm
)
.post(wrapAsync(userController.signUp));

// login

router.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{ 
    failureRedirect: '/login', 
    failureFlash: true,
    }),
    userController.logIn
);

//logout

router.get("/logout",userController.logOut);

module.exports = router; 
