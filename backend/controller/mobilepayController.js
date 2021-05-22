const MobilePay = require("../models/mobilepayModel");

exports.mobilepay = (req, res) => {
    console.log("req.body", req.body);
    const mpay = new MobilePay(req.body);
    //save mobile payment data
    mpay.save((err, mpay) => {
        if(err) {
            //if there is error show error
            return res.status(400).json({
                err
            });
        }
        res.json({
            mpay
        });
    });
};
