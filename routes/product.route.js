const express = require("express")
const { deleteProduct, updateProduct, getSingleProduct, getProducts, addProduct } = require("../controllers/product.controller")

const productPouter = express.Router()

// add products
productPouter.post("/", addProduct)

// get all products
productPouter.get("/", getProducts)
// get single product by id
productPouter.get("/:id", getSingleProduct)
//  update a product
productPouter.put("/:id", updateProduct)
// delete a product
productPouter.delete("/:id", deleteProduct)

module.exports = productPouter