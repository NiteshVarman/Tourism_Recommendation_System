const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        set: (v) => (typeof v === "object" ? v.url : v),
        default: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
    price: {
        type: Number,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
