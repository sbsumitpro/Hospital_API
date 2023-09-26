const express = require("express");
const app = express();
const port = 3800
const db = require("./config/mongoose"); // call the mongoDB connection config file
const bodyParser = require("body-parser");
const passportJWT = require("./config/passport_jwt_strategy"); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


// routes 
app.use("/",require("./routes/index"));

// creating a server
app.listen(port,()=>{
    console.log("Server started and lisening to port",port);
})