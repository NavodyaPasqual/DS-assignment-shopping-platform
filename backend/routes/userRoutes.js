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
    signin,
    signup,
} = require("../controller/userController");

/**
 * create user routes
 */
userRouter.post('/signIn',signin);
userRouter.post('/signUp',signup)
module.exports = userRouter;