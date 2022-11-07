const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/:user_id",controller.getUserByID);

module.exports = router;