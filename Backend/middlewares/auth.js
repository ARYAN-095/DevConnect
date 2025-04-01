
const jwt= require("jsonwebtoken");
const User= require("../models/User.js");


const userAuth=async(req, res, next)=>{
    try{
        const {token}=req.cookies;
        if(!token){
            return res.status(401).send("Please Login!");
        }

        const decodedObj=await jwt.verify(token,1234);

        const {_id}=decodedObj;

        const user= await User.findById(_id);

        if(!user){
            throw new Error("User not found");
        }

        req.user=user;
        
        next();

    } catch(err){
        res.status(400).send("Error: "+ err.message);
    }
};

module.exports={
    userAuth,
}

