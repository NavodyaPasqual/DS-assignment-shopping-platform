require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db")
//import routes
const productRoute = require("./routes/productRoute")
const mobilepayRoute = require("./routes/mobilepayRoute")
const stripeRoute = require("./routes/stripeRoute")
const smsAndEmailRoute = require("./routes/smsAndEmailRoute")

connectDB();
const app = express();
app.use(express.json());

app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use("/api/products",productRoute);
app.use("/api/mobilepay", mobilepayRoute);
app.use("/api/stripepayment", stripeRoute);
app.use("/api", smsAndEmailRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
