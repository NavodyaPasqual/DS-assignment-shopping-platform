//Stripe Credit card /Debit card Payment configuration

const express = require("express");
const router = express.Router();
//Stripe secret key
const stripe = require("stripe")("sk_test_51IsBYJDWjRH4nkM82aGDmpwwbFlfcemfkEwQqr5wLrKU5qBLAMxtKByWrQx4nfKSF1c1KxGdgZJzrpevjrWdFXS600rRMHiFCb")

router.post("/", async (req, res) => {
   let {amount , id} = req.body
    try {
       //create stripe credit or debit card payment
       const payment = await stripe.paymentIntents.create({
           amount,
           currency: "USD",
           description: "Shopping Platform",
           payment_method: id,
           confirm: true
       })

        //Payment Success message
        res.json({
            message: "Payment Successful. Thank You!",
            success: true
        })

    } catch (error) {
        //Payment failed message
        res.json({
            message: "Payment failed",
            success: false
        })
    }
});

module.exports = router;
