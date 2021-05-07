//To connect models with db
require("dotenv").config();

const connectMongoDB = require("./config/db");
//import models and data
const productData = require("./data/product");
const productModel = require("./models/productModel");

connectMongoDB();

//delete everything in db and insert
const importDataDB = async () => {
    try {
        await productModel.deleteMany({});

        await productModel.insertMany(productData);

        console.log("Product Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importDataDB();