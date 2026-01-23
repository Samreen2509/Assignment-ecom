const express = require("express");

const {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;