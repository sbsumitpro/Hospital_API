const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
// const env = require("./environment")

const Doctor = require("../models/doctors");

let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "CodeChef"
}

passport.use(new JWTStrategy(opts, function(jwt_payload, done) {

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