const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.post("/", controller.addTransaction);
router.patch("/update/", controller.updateTransaction);
router.get("/cart/:id", controller.getCustomerCart);
router.get("/customer-current-orders/:id", controller.getCustomerCurrentOrders);
router.get("/order/:id", controller.getVendorReserveRequests);
router.get("/reserves/:id", controller.getVendorReserves);
router.delete("/:id", controller.deleteTransaction);

module.exports = router;