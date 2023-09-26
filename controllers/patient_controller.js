const Patient = require("../models/patients");
const Report = require("../models/reports");

module.exports.create = async(req,res)=>{
    console.log(req.body)
    try{
        let patient = await Patient.create({
            name:req.body.name,
            phone_number:req.body.phone_number
        })
        return res.status(201).json({
            message:"Patient's account created successfully",
            data:patient
        })
    }catch(err){
        console.log("Error in creating patient's account---",err)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports.createReport = async(req,res)=>{
    console.log(req.params)
    try{
        let report = await Report.create({
            patient_id:req.params.id,
            doctor_id:req.body.doctor_id,
            status:req.body.status,
            date: new Date().toLocaleString()
        })
        return res.status(201).json({
            message:"Patient's report created successfully",
            data:report
        })
    }catch(err){
        console.log("Error in creating patient's report---",err)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports.getAllPatients=async(req,res)=>{
    try{
        let patients = await Patient.find();
        return res.status(200).json({
            message:"Success",
            data:patients
        })
    }catch(err){
        console.log("Error in finding patients",err);
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports.getAllReports = async(req,res)=>{

    try{
        let reports = await Report.find({patient_id:req.params.id});
        return res.status(200).json({
            message:"Success",
            count:reports.length,
            data:reports
        })
    }catch(err){
        console.log("Error in finding reports",err);
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}
