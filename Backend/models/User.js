
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:4,
        maxLength:50,
    },
    lastName:{
        type:String,
    },
    emaiId:{
   type:String,
    lowercase:true,
    required:true,
    unique:true,
    tring:true,
    

    },
    password:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        min:18
    },

    gender:{
        type:String,
        enum:{
            values:["male", "female", "other"],
            message:`{value} is not a valid gender type`
        }
    },
    photoUrl:{
        type:String,
        default:"https://geographyandyou.com/images/user-profile.png",

    },
    
},

    {
        timestamps:true,
    }
)


userSchema.methods.getJWT=async function(){
    const user=this;

   const token= await jwt.sign({_id:user._id},"123@34",{
    expiresIn:"7d",
   })

   return token;
}

 
module.exports=mongoose.model("User", userSchema);
