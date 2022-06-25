const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const { NotFoundError } = require("../utils/errors")

router.get("/store", async (req, res, next) => {
    try{
        const products= await Store.listProducts();
        res.status(200).json({"products": products});
    }catch(err){
        next(err);
    }
})

router.get("/store/:productId", async (req, res, next) =>{
    try {
        const productId= req.params.productId;
        const product= await Store.fetchProductById(productId);
        if(!product) {
            throw new NotFoundError("not found");
        }
        res.status(200).json({ "product" : product })
    }catch (err) {
        next(err);
    }
})

router.post("/store", async (req, res, next) =>{
    try {
        const newPurchase= req.body;
        const purchase= await Store.createOrder(newPurchase);
        res.status(201).json({ "purchase" : purchase })
    }catch(err){
        console.log("over here");
        next(err);
    }
})

module.exports = router;