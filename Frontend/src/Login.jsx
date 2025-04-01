import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {

    const [emailId, setEmailId]= useState("aryan123@gmail.com");
    const [password, setPassword]= useState("Ar@1234");


    const handelLogin=async ()=>{

       try{

        const res= await axios.post("http://localhost:5000/login",{
            emailId,
            password,
          });

       }catch(err){
            
        console.error(err);

       }
     
    }

  return (
 
    <div className="flex justify-center pt-25">

<div className= "bg-blue-100 w-96 shadow-sm pl-2 ">
  <div>
    <h1 className="text-center font-bold text-2xl pt-2 ">Login</h1>
    

    <fieldset className="fieldset ">
  <legend className="fieldset-legend pt-8  text-[17px]">Email Id: </legend>
  <input type="text" className="input " placeholder="Enter emailId" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
   
</fieldset>

<fieldset className="fieldset ">
  <legend className="fieldset-legend pt-8 text-[17px] ">Password: </legend>
  <input type="text" className="input " placeholder="
  Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
   
</fieldset>
     
    <div className=" flex justify-center py-4">
      <button className="btn btn-primary" onClick={handelLogin}>Login</button>
    </div>
  </div>
</div>
               
    </div>
  )
}

export default Login