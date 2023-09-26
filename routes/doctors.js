const express = require("express");
const router=express.Router();
const doctorsController = require("../controllers/doctor_controller");


router.post("/register", doctorsController.create);
router.post("/login", doctorsController.create_session);


module.exports = router;