var productsController = require('./products.controller');
var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with user');
// });

router.get('/:id', productsController.getOneProducts);
router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProducts);
router.delete('/:id', productsController.deleteProducts);
router.patch('/:id', productsController.updateProducts);
// ==================================================

module.exports = router;
