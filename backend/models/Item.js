const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({

    itemNo: {
        type: String,
        required: true
    },
    itemCategory: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    countStock: {
        type: Number,
        required: true
    },
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;