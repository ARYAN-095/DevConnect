const express= require('express');

const connectDB=require('./config/Database.js');
 
const authRouter=require("./routes/auth.js");
const cookieParser = require('cookie-parser');
const requestRouter=require("./routes/request.js")
const profileRouter=require("./routes/profile.js")

const cors= require('cors');
const userRouter = require('./routes/user.js');

const app=express();


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


app.use(express.json());
app.use(cookieParser());

 

app.use("/", authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/", userRouter);



 



connectDB().then(()=>{
    console.log("Successfully connectecd to Database");
    app.listen(5000, ()=>{
        console.log("Server is successfully listening on the port 5000");
    })
}).catch((err)=>{
    console.error("Database cannot be connected");
})


 