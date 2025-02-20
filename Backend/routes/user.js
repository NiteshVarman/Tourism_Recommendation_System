const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log("Registered user:", registeredUser);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "User registered successfully");
            res.redirect("/");
        });
        
    } catch (e) {
        console.log("Error during registration:", e.message);
        req.flash("error", e.message);
        res.redirect("/signup"); 
    }
 }));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});
 
router.post(
    "/login", 
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: '/login', 
        failureFlash: true
    }), 
    async (req, res) => {
        req.flash("success", "Logged in successfully");
        res.redirect(res.locals.redirectUrl || "/");
    }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
    req.flash("success", "Logged out successfully");
    res.redirect("/");
});
});


module.exports = router;