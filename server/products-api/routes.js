const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/", controller.getAllProducts);
router.get("/:vendor_id", controller.getProductByVendorID);

module.exports = router;