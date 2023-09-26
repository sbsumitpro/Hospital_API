const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/demo_hospital_api");

const db = mongoose.connection;

db.on("error", console.log.bind(console,"Error connection to DB"));
db.once("open",()=>{
    console.log("Successfully connected to the DB");
})