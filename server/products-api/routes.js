const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/",controller.getAllProducts);
router.post("/",controller.insertProd);
router.get("/:vendor_id", controller.getProductByVendorID);
router.get("/product/:product_id", controller.getProductByProductID);
router.patch("/patch/:product_id", controller.patchProductByProductID);
router.delete("/delete_product/:product_id", controller.deleteProductByProductID);
router.patch("/patchimg/:product_id", controller.patchImageByProductID);
//router.get("/:product_id", controller.getProductbyProductID)
//router.post("/", controller.insertProd)

module.exports = router;
