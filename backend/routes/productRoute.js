const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProductById,
} = require("../controller/productController");

//GET all products from db
router.get("/", getProducts);
//GET a product by id
router.get("/:id", getProductById);

module.exports = router;
