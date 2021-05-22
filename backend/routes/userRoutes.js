
const express = require("express");
const userRouter = express.Router();

const {
    signin,
    signup,
} = require("../controller/userController");

userRouter.post('/signIn',signin);
userRouter.post('/signUp',signup)
module.exports = userRouter;