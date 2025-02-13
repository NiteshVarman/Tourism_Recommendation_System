const mongoose = require("mongoose");
const initData = require("./tourpackages.js");
const Listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/project";

main().
then(() => {
    console.log('MongoDB is connected');
}).
catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
};

initDB();