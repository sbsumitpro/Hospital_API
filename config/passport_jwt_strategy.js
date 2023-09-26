const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
require("dotenv").config();


const Doctor = require("../models/doctors");

let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    // Checking if the token in the header under Authorization matches with the generated token and also if the elapsed time is less than expiration time.
    Doctor.findById(jwt_payload._id) 
    .then((doctor)=>{
        if(doctor){
            return done(null,doctor);
        }else{
            return done(null,false);
        }
    }).catch((err)=>{
        console.log("Error in finding doctor from JWT"); return;
    })
        
}))

module.exports = passport