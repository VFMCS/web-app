const { Router } = require ('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/",controller.getUsers);

//commenting out below statement for time being in order to allow getUserByEmailAndPassword to be called
//router.get("/:user_id",controller.getUserByID);

router.post("/",controller.createUser);
router.delete("/:user_id",controller.deleteUser);
router.get("/:email/:password",controller.getUserByEmailAndPassword);



module.exports = router;