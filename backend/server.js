const express = require('express');
const mongoose = require('mongoose');//for item
const bodyParser = require('body-parser');//for item
const cors = require('cors');//for item
const dotenv = require('dotenv');//for item
require('dotenv').config();
const connectDB = require('./config/db')

connectDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use(cors());//for item
app.use(bodyParser.json());//for item
const URI = process.env.MONGO_URI;//for item
mongoose.connect(URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false});//for item
const connection = mongoose.connection;//for item
connection.once("open", () => {
    console.log("mongodb connection succes");//for item
});

//import routes
const productRoute = require('./routes/productRoute')
app.use('/api/products',productRoute);
const itemRoute = require('./routes/itemRoute');//for item
app.use('/item',itemRoute);// for item

app.listen(PORT, ()=>console.log(`Server is up and running on port ${PORT}`))