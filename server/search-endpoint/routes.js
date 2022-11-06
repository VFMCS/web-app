const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/:key",controller.productSearch);

module.exports = router;