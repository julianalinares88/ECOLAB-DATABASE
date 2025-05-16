const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

// 1. Obtener todos los productos
router.get("/", productsController.getAllProducts);

// 2. Obtener productos con precio menor a 50
router.get("/precio/menor50", productsController.getProductsUnder50);

// 3. Obtener productos con precio mayor a 50 y categoría "Electrónica"
router.get("/filtrar-multiple", productsController.getFilteredProductsByPriceAndCategory);

// 4. Obtener productos con precio mayor a 50 y categoría "Electrónica"
router.get("/filter", productsController.filterProducts);

// 5. Obtener productos con precio mayor a 50 y categoría "Electrónica"
router.get("/paginated", productsController.getPaginatedProducts);

// 6. Obtener productos con precio mayor a 50 y categoría "Electrónica"
router.get("/user/:userId", productsController.getProductsByUser);



module.exports = router;
