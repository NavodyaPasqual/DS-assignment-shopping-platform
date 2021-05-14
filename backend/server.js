require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db")
//import routes
const productRoute = require("./routes/productRoute")

connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use("/api/products",productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))