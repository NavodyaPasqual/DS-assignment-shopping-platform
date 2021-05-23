require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
var corsOp= {};

connectDB();
const app = express();
app.use(express.json());

app.use(cors(corsOp));
//import routes
const productRoute = require("./routes/productRoute");
const userRouter = require('./routes/userRoutes');
const deliveryRouter = require('./routes/deliveryRoutes');
const itemRoute = require('./routes/itemRoute');//for item




app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use("/api/products",productRoute);
app.use('/user',userRouter);
app.use('/delivery',deliveryRouter);
app.use('/item',itemRoute);// for item

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))