const express= require('express');

const connectDB=require('./config/Database.js');
 
const authRouter=require("./routes/auth.js");
const cookieParser = require('cookie-parser');

const app=express();
app.use(express.json);
app.use(cookieParser());


app.use("/", authRouter);




 



connectDB().then(()=>{
    console.log("Successfully connectecd to Database");
    app.listen(5000, ()=>{
        console.log("Server is successfully listening on the port 5000");
    })
}).catch((err)=>{
    console.error("Database cannot be connected");
})


 