//Route configurations for mobile payment
const express = require("express");
const router = express.Router();

const {mobilepay} = require("../controller/mobilepayController");

//get express validations
const { mobilePaymentmethodValidator } = require("../config/validator");

router.post("/", mobilepay, mobilePaymentmethodValidator);

module.exports = router;
