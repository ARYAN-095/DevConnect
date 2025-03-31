const express= require("express");
const authRouter=express.Router();
const {validateSignUpData}=require("../utils/validation.js");


const User= require("../models/User.js");




authRouter.post("/signup", async(req,res)=>{
    try{
        
       // validate the data
         
       validateSignUpData(req);

        const {firstName, lastName, emailId, password}=req.body;


        


       // encrypt the password
        const passwordHash=await bcrypt.hash(password,10);
        console.log(passwordHash);


        // create a new Instance
        const user= new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        })

        const savedUser= await User.save();
        const token=await savedUser.getJWT();

        res.cookie("token", token,{
            expires:new Date(Date.now() + 8*3600000),
        })

        res.json({message:"User Added successfully", data: savedUser});

    }catch(err){
        res.status(400).send("Error: "+ err.message);
    }
});



authRouter.post("/login",async(req,res)=>{
    try{
        const{emailId, password}=req.body;

        const user= await User.findOne({emaiId:emailId});

        if(!user){
            throw new Error("Invalid credentials");
        }

        const isPasswordValid= await User.validatePassword(password);

        if(isPasswordValid){
        const token= await user.getJWT();
        res.cookie("token", token, {
            expires: new Date(Date.now()+8*360000)
        })
        res.send(user);
        }else{
            throw new Error("Invalid password");
        }

    }catch(err){
        res.status(400).send("Error: "+ err.message);
    }
});


authRouter.post("/logout", async(req, res)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
    })
    res.send("Logout Successfully");
}
)


module.exports=authRouter;



