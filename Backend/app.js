const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const ExpressError = require('./utils/ExpressError');
const dataBase = require('./init/index.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const cors = require('cors');

const mongo_url = "mongodb://127.0.0.1:27017/project";

const userRouter = require('./routes/user');

main()
.then(() => {
    console.log('MongoDB is connected');
})
.catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});

app.use('/', userRouter);


app.get('/', (req, res) => {
    res.render('home');
});

//Index route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    console.log(allListings);
    // res.render("listings/index", { allListings });
});

//Show route
app.get('/listings/:id', async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    // res.render("listings/show", { listing });
}); 

app.get('/india', async (req, res, next) => {
    try {
        const indiaPackages = await Listing.find({ country: "India" }); 
        res.render('india', { indiaPackages }); 
    } catch (error) {
        next(error); 
    }
});

app.get('/indiamap', (req, res) => {
    res.render('indiamap');
})

app.get('/place', async (req, res) => {
    try {
        const placeName = req.query.name; // Get place from URL (e.g., Goa)
        const filteredPackages = await Listing.find({ place: placeName }); // Fetch packages for the place
        // res.render('place', { placeName, filteredPackages }); // Pass data to place.ejs
        res.json(filteredPackages);
    } catch (error) {
        console.log(error);
    }
});


app.use((err, req, res, next) => {
    console.error("Error:", err.message);  // Log error to console
    req.flash("error", err.message); // Flash error message
    res.redirect("/signup"); // Redirect back to signup page
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})
