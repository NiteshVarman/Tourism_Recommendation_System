const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const ExpressError = require('./utils/ExpressError');

const mongo_url = "mongodb://127.0.0.1:27017/project";

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

app.get('/', (req, res) => {
    res.send("Hello World");
});

//Index route
app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

//Show route
app.get('/listings/:id', async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
}); 

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode, message} = err;
    res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})

