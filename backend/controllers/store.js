const Store = require("../models/store"); 

const registerStore = async (req, res) => {
 
  if (!req.body.name || !req.body.adress)
    return res.status(401).send("Process failed: Incomplete data");

  const existingStore = await Store.findOne({ name: req.body.name });
  if (existingStore) return res.status(401).send("Process failed: Store already exist");

  const store = new Store({
    name: req.body.name,
    adress: req.body.adress,
    city: req.body.city,
  });

  const result = await store.save(); 
  if (!result) return res.status(401).send("Failed to register Store");
  return res.status(200).send({ store });
};

const listStore = async (req, res) => {
  const store = await Store.find();
  if (!store) return res.status(401).send("No Store");
  return res.status(200).send({ store });
};

module.exports = { registerStore, listStore };
