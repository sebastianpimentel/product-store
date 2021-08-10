const express= require("express");
const router= express.Router();
const productController= require("../controllers/product")

//get post put delete
//http://localhost:3001/api/product/registerProduct asi va a quedar la ruta de api que estamos creando
router.post("/registerProduct", productController.registerProduct);//para registrar

//http://localhost:3001/api/product/listProduct
router.get("/listProduct",productController.listProduct);//para listar

module.exports=router;