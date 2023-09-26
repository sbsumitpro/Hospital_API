const express = require("express");
const app = express();
const port = 3800
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
const passportJWT = require("./config/passport_jwt_strategy"); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



app.use("/",require("./routes/index"));

app.listen(port,()=>{
    console.log("Server started and lisening to port",port);
})