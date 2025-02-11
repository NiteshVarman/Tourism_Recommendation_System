const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("../models/listing.js");

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



app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/listings', (req, res) => {
    let sampleListing = new Listing({
        title: "Sample Listing",
        description: "This is a sample listing",
        price: 100,
        location: "Sample Location",
        country: "Sample Country"
    });
    await sampleListing.save();
    console.log("Listing saved");
    res.send("Successful testing");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})

