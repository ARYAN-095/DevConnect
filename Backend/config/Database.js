
const mongoose= require("mongoose");

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://aryandevps095:BIeQs8R6nfd4vTAA@cluster0.kzbki.mongodb.net/");
    
}

module.exports= connectDB;