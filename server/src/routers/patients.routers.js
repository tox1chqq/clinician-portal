const Router = require("express");
const router = new Router();
const controller = require("../controllers/patients.controller");

router.get("/patients", controller.getPatients);
router.post("/patients", controller.createNewPatient);
router.delete("/patients/:id", controller.deletePatient);

module.exports = router;
