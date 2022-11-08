const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/",controller.getFarmers);
router.post("/",controller.getFarmers);
router.get("/:user_id",controller.getFarmerById);



module.exports = router;