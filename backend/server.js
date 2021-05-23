require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
var corsOp= {};
const cookieParser = require('cookie-parser');
const mobilepayRoute = require("./routes/mobilepayRoute")
const stripeRoute = require("./routes/stripeRoute")
const smsAndEmailRoute = require("./routes/smsAndEmailRoute")

connectDB();
const app = express();
app.use(express.json());

app.use(cors(corsOp));
//import routes
const productRoute = require("./routes/productRoute");
const userRouter = require('./routes/userRoutes');
const deliveryRouter = require('./routes/deliveryRoutes');
const itemRoute = require('./routes/itemRoute');//for item
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



app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use("/api/products",productRoute);
app.use('/user',userRouter);
app.use('/delivery',deliveryRouter);
app.use('/item',itemRoute);// for item

app.use("/api", smsAndEmailRoute);
app.use("/api/stripepayment", stripeRoute);
app.use("/api/mobilepay", mobilepayRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
