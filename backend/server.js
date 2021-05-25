require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const cors = require("cors");
var corsOp= {};


//import routes
const productRoute = require("./routes/productRoute");
const userRouter = require('./routes/userRoutes');
const deliveryRouter = require('./routes/deliveryRoutes');
const itemRoute = require('./routes/itemRoute');//for item
const mobilepayRoute = require("./routes/mobilepayRoute");
const stripeRoute = require("./routes/stripeRoute");
const smsAndEmailRoute = require("./routes/smsAndEmailRoute");
const morgan = require("morgan");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");

connectDB();
const app = express();

app.use(cors(corsOp));

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());



app.use("/api/products",productRoute);
app.use('/user',userRouter);
app.use('/delivery',deliveryRouter);
app.use('/item',itemRoute);// for item

app.use("/api", smsAndEmailRoute);
app.use("/api/stripepayment", stripeRoute);
app.use("/api/mobilepay", mobilepayRoute);


app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
