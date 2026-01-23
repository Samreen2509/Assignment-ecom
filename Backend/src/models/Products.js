const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0, min: 0, max: 5
    },
    image: {
        type: String,
        required: true
    }
},
{timestamps: true});

ProductModel = mongoose.model("ProductModel",productSchema);
module.exports = ProductModel;