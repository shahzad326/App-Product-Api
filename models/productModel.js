const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model("PRODUCT", productModel);

module.exports = Product;
