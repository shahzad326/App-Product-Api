const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
require("../db/conn");
// const User = require("../models/userSchema");
const Product = require("../models/productModel");
router.get("/", (req, res) => {
  res.send("Hello World router.js");
});

router.post("/products", async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.json({ error: "Please Filled The Field Properly" });
  }

  try {
    const productExist = await Product.findOne({ name: name });
    if (productExist) {
      return res.json({ error: "Product Already Exist" });
    } else {
      const product = new Product({ name, price, description });
      await product.save();
      res.json({ message: "Product Added Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
