const Delivery = require("../models/deliveryModel");

/**
 * add user delivery to data base
 * @param req
 * @param res
 */
const addDelivery = async (req,res)=> {
   const delivery =req.body;

   const addNewDelivery = new Delivery(delivery);
    try{
        await addNewDelivery.save();
        await res.status(201).json(addNewDelivery);
    }catch (e) {
        await res.status(409).json({message: e.message});
    }

}

module.exports = {
    addDelivery,
};