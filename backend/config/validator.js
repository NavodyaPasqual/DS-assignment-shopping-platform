

//Validation for the mobile payment form
exports.mobilePaymentmethodValidator = (req, res,next) => {
    //validate name
    req.check('name', 'Name is required').notEmpty()
    //validate email
    req.check('email', 'Email must be between 3 to 40 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Invalid email. (@ missing)')
        .isLength({
            min:4,
            max: 40
        });
    //validate mobile number for billing
    req.check('mobileno', 'Mobile number is required').notEmpty().isNumeric()
    req.check('mobileno')
        .isLength({min: 10 , max:10})
        .withMessage('Mobile number must have 10 digits number')
        .matches(/^(09|\+94)\d{9}$/)
    //validate identity of the mobile number owner
    req.check('nationalid').notEmpty()
        .isLength({min: 10 , max:10})
        .withMessage('Invalid identity value')

    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError});
    }
    next();
};
