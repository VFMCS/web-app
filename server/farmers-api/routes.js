const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();


router.get("/",controller.getFarmers);

module.exports = router;