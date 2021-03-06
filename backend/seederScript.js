//To connect models with db
require("dotenv").config();

const connectMongoDB = require("./config/db");
//import models and data
const productData = require("./data/products");
const Product = require("./models/productModel");


connectMongoDB();

//delete everything in db and insert
const importDataDB = async () => {
    try {

        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Product Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importDataDB();