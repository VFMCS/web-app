const { Router } = require ('express');
const controller = require('./controllers');

const router = Router()

router.get("/",controller.getUsers);
router.get("/:user_id",controller.getUserByID);
router.get("/farmers",controller.getFarmers);
router.post("/",controller.createUser);
router.delete("/:user_id",controller.deleteUser);


module.exports = router;