const express= require('express');

const connectDB=require('./config/Database.js');

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello World");
})



connectDB().then(()=>{
    console.log("Successfully connectecd to Database");
    app.listen(5000, ()=>{
        console.log("Server is successfully listening on the port 5000");
    })
}).catch((err)=>{
    console.error("Database cannot be connected");
})


 