const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/products/:key", controller.productSearch);
router.get("/products/:product_key/:vendor_id", controller.productSearchByVendorID);
router.get("/products/", controller.returnAllProducts);
router.get("/vendors/:key", controller.vendorSearch);
router.get("/vendors/", controller.returnAllVendors);



module.exports = router;