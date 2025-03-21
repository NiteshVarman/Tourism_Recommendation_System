const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {                                // ✅ Added name field
        type: String,
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",  // Reference to User schema
        required: false                    // Make it optional since name is manually entered
    },
    listing: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Listing",  
        required: true 
    },
    rating: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },
    comment: { 
        type: String, 
        required: true 
    },
    photos: [{ 
        type: String  // Array of image URLs
    }],
    upvotes: { type: Number, default: 0 },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    responses: [                                     // 💬 Responses array
        {
            name: { type: String, required: true },
            comment: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ]
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
