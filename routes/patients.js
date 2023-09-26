const express = require("express");
const router=express.Router();
const patientsController = require("../controllers/patient_controller");
const passport = require("passport")

// For all this routes used the jwt authentication. These routes will only pass when jwt authentication is successful
router.get("/", passport.authenticate("jwt",{session:false}),patientsController.getAllPatients);
router.post("/register", passport.authenticate('jwt',{session:false}) , patientsController.create);
router.post("/:id/create_report", passport.authenticate('jwt',{session:false}), patientsController.createReport);
router.get("/:id/all_reports",passport.authenticate('jwt',{session:false}), patientsController.getAllReports);



module.exports = router;