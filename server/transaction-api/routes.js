const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.post("/", controller.addTransaction);
router.put("/update/", controller.updateTransaction);
router.get("/cart/:id", controller.getCustomerCart);
router.get("/order/:id", controller.getVendorOrders);

module.exports = router;