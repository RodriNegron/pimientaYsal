var express = require('express');
const productController = require('../controller/productController');
var router = express.Router();


router.get("/detalleMenu", productController.detail);
router.get("/detalle/:id", productController.id)

module.exports = router;
