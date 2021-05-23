const mongoose = require("mongoose");

/**
 * user model
 * @type {*}
 */
const deliverySchema = mongoose.Schema({
    name:{type:String,required:true},
    country:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    contact:{type:String,required:true},
    userId:{type:String,required:true},
    items:{type:String,required:true},
    amount:{
        type:Number,
        required:true,
        default:0
    },
    id:{type:String},
});

/**
 * export user model as 'User'
 */

const deliveryModel = mongoose.model("Delivery", deliverySchema);

module.exports = deliveryModel;