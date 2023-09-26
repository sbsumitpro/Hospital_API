const Report = require("../models/reports");
module.exports.getSpecificStatusReport = async(req,res)=>{
    
    try{
        // Finding out all the reports whose status matches the parameter in the url path
        let reports = await Report.find({status:req.params.status})
        return res.status(200).json({
            message:"Success!",
            count:reports.length,
            data:reports
        })
    }catch(err){
        console.log("Error in finding specific status report",err);
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}