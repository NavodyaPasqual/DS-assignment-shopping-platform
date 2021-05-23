/**
 * import routes
 * import express
 */
const express = require("express");
const userRouter = express.Router();

/**
 * import controllers
 */
const {
    addDelivery
} = require("../controller/deliveryController");

/**
 * create user routes
 */
userRouter.post('/delivery',addDelivery);
module.exports = userRouter;