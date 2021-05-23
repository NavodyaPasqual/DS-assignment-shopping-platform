const express = require("express");
const router = express.Router();
let Item = require("../models/Item");

//create
router.route("/addItem").post((req, res) => {
    const itemNo = req.body.itemNo;
    const itemCategory = req.body.itemCategory;
    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;
    const itemPrice = Number(req.body.itemPrice);
    const countStock = Number(req.body.countStock);

    const newItem = new Item({
        itemNo,
        itemCategory,
        itemName,
        itemDescription,
        itemPrice,
        countStock
    }) ;
    newItem.save().then(()=>{
        res.json("Item Added");
    }).catch((err)=>{
        console.log(err);
    })
})


//get
router.route("/itemList").get((req, res) => {
    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {itemNo, itemCategory, itemName, itemDescription, itemPrice, countStock} = req.body;
    const updateItem = {
        itemNo,
        itemCategory,
        itemName,
        itemDescription,
        itemPrice,
        countStock
    }
    const update = await Item.findByIdAndUpdate(userId,updateItem).then(()=>{
        res.status(200).send({status: "user updated", user: update})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "error update"});
    })
})


//delete
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;
    await Item.findByIdAndDelete(userId).then(()=> {
        res.status(200).send({status: "user deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "error delete", error: err.message});
    })
})
module.exports = router;