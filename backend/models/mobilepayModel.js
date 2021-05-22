//Model for the mobile payment

const mongoose = require('mongoose');

const mobilepaySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    mobileno: {
        type: Number,
        maxlength: 10,
        minlength: 10,
        required: true
    },
    nationalid: {
        type: String,
        maxlength: 10,
        minlength: 10,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("MobilePay", mobilepaySchema);
