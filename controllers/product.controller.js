const Product = require("../models/product.model");

const addProduct = async(req, res)=>{
    try{
        const doc = req.body;
       const product =  await Product.create(doc)
       if(product){
        res.status(200).json(product)
       }
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getSingleProduct = async(req, res)=>{
    try {
        const {id} = req.params
        console.log(id)
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async(req, res)=>{
    try {
       const {id} = req.params
       const updatedProperties = req.body;
       const product = await Product.findByIdAndUpdate(id, updatedProperties) 

       if(!product){
        return res.status(404).json({message: "Product not found"})
       }

       const newProduct = await Product.findById(id)
       console.log(newProduct)

       res.status(200).json({status: "Sucess!",message: "Product updated successfully", product: newProduct})
    } catch (error) {
        res.status(500).json({status: "failed!",message: error.message})
    }
}

const deleteProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: "Product not found!"})
        }
        res.status(200).json({status: "Success", message: "Product deleted successfully", product: product})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    addProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}
