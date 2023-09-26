const express = require("express");
const router=express.Router();


router.get("/", (req,res)=>{
    return res.send("Hello Welcome")
})

router.use("/api/doctors",require("./doctors.js"));
router.use("/api/patients",require("./patients"));
router.use("/api/reports",require("./reports"));

// This simulates all the fallback routes
router.all("/*", (req,res)=>{
    return res.status(404).json({
        message:"Not found"
    })
})


module.exports = router;