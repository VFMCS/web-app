const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/:key", controller.productSearch);
router.get("/:product_key/:vendor_id", controller.productSearchByVendorID);
router.get("/", controller.returnAllProducts);

module.exports = router;