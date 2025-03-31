
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fistName:{
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

 
module.exports=mongoose.model("User", userSchema);
