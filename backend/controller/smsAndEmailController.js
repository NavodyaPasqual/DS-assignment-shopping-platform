const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

//send text message to customer after payment process
exports.twilioSMS = (req, res) => {
    client.messages
        .create({
            body: 'Payment Successful!',
            from: '+15017122661',
            to: '+4645656546'
        })
        .then(message => console.log(message.sid));
}

//Send email to buyer with transaction details
exports.sendMail = (req, res) => {
    const emailData = {
        to: 'jayamithpriyankara1@gmail.com',
        from: 'sljay827@gmail.com',
        subject: `Your items are ready to deliver`,
        text:
            `<h2> Total cost: ${cart.price} </h2>
             <p> Thank you for shopping with us.</p>`
    };
    sgMail.send(emailData)
        .then(sent =>
            console.log('Email sent'))
        .catch(error =>
            console.log('Error'));
}

