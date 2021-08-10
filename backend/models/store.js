const mongoose = require("mongoose"); //se encarga de crear el esquema en la base de datos
const storeSchema = new mongoose.Schema({
  name: String,
  adress: String,
  city: String,
});
const store = mongoose.model("store", storeSchema); 
module.exports = store; 