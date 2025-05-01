const Listing = require("../models/listing.js");
const initData = require("./tourpackages.js");

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("Data initialized");
    } catch (error) {
        console.error("Error initializing data:", error);
    }
};

module.exports = initDB;
