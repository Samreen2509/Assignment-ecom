const ProductModel = require("../models/Products");

const getAllProduct = async(req, res) => {
    try{
        const products = await ProductModel.find();
        res.json(products);
    }catch(err){
        res.status(500).json({ message: err.message})
    }
};

const createProduct = async(req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json(product);  
    }catch(err){
        res.status(400).json({ message: err.message});
    }
};

const updateProduct = async(req, res) => {
    try{
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body}
    );

    if(!updatedProduct) {
        res.status(404).json({ message: "Product not found."});
    }

    res.status(200).json(updatedProduct);
    }catch(err){
        res.status(400).json({ message: err.message});
    }
};

const deleteProduct = async(req, res) => {
    try{
        const product = await ProductModel.findByIdAndDelete(req.param.id);

        if(!product) {
            return res.status(404).json({message: "Product not found."})
        }

        res.json({ message: "Product deleted successfully."})
    }catch(err){
        res.status(500).json({ message: err.message});
    }
};

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}