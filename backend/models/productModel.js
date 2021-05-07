const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please Enter Product Name'],
    },
    description: {
        type: String,
        required: [true,'Please Enter Product Description'],
    },
    category: {
        type: String,
        required: [true,'Please Enter Product Category'],
    },
    price: {
        type: Number,
        required: [true,'Please Enter Product Price'],
    },
    countInStock: {
        type: Number,
        required: [true,'Please Enter Product Count'],
    },
    image: {
        type: String,
        required: [true,'Please Enter Product Image'],
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;