const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

// 1. Obtener todos los productos
router.get("/", productsController.getAllProducts);

// 2. Obtener productos con precio menor a 50
router.get("/precio/menor50", productsController.getProductsUnder50);



module.exports = router;
