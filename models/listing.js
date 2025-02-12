const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        set: (v) => (typeof v === "object" ? v.url : v),
        default: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;