const express = require("express");
const {sendMail} = require("../controller/smsAndEmailController");
const {twilioSMS} = require("../controller/smsAndEmailController");
const router = express.Router();

router.get("/sms", twilioSMS);
router.get("/email", sendMail);

module.exports = router;
