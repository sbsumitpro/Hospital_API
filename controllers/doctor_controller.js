const Doctor = require("../models/doctors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.create =async (req,res)=>{
    try{
        let doctor = await Doctor.create({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            specialist:req.body.specialist
        })
        return res.status(201).json({
            message:"Suceessfully registered as a doctor",
            data: doctor
        })
    }catch(err){
        console.log("Error in creating user---",err)
        return res.status(500).json({
            message:"Internal server error"
        })
    }

} 

module.exports.create_session=async (req,res)=>{
    try{
        let doctor = await Doctor.findOne({email:req.body.email})

        if(!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message:"Invalid username/password"
            })
        }

        return res.status(200).json({
            message:"Sign in successful, here is your token, please keep it safe!",
            data:{
                // token got expired in 360 seconds¸
                token:jwt.sign(doctor.toJSON(), process.env.JWT_SECRET, {expiresIn:360}),
                data:doctor

            }
        })
    }catch(err){
        console.log("Error in finding user---",err)
        return res.status(404).json({
            message:"Not Found"
        })
    }
   
}