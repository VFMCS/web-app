const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/",controller.getUsers);
router.get("/:user_id",controller.getUserByID);
router.post("/",controller.createUser);
router.delete("/:user_id",controller.deleteUser);


module.exports = router;