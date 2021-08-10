const mongoose = require("mongoose");
const dbConnection = async () => {
 
  try {
    //manejador de errores
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Connection with MongoDB: ON ", e);
    throw new Error("Error connectiong to MongoBD");
  }
};
module.exports={
    dbConnection
}