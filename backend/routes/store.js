const express= require("express");
const router= express.Router();
const storeController= require("../controllers/store")

//get post put delete
//http://localhost:3001/api/store/registerstore asi va a quedar la ruta de api que estamos creando
router.post("/registerStore", storeController.registerStore);//para registrar

//http://localhost:3001/api/store/listStore
router.get("/listStore", storeController.listStore);//para listar

module.exports=router;