const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    doctor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },

    status:{
        type:String,
        required:true,
        enum:["Negetive","Travel-Quarantine","Symptoms-Quarantine","Positive-Admit"]
    },
    date:{
        type:String

    }
},{
    timestamps:true
}
)

const Report = mongoose.model("Report",reportSchema);
module.exports = Report;