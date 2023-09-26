const express = require("express");
const router=express.Router();
const reportsController = require("../controllers/report_controller");


router.get("/:status",reportsController.getSpecificStatusReport);


module.exports = router;