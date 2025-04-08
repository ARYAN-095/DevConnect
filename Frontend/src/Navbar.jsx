import React from 'react'

import Logo from './assets/Logo.jpeg'

import {useSelector} from 'react-redux'

const Navbar = () => {

   const user=useSelector((store)=>store.user);


  return (



    <div className="navbar bg-base-100 shadow-sm flex justify-between bg-yellow-400">
      
      <div className="flex justify-between">

      <div>
         <img src={Logo} className='h-15 w-15' />
      </div>

      <div className="flex-1 mt-2.5  ">
      <a className="text-4xl text-dark-400 pl-3 font-extrabold font">DevConnect</a>
    </div>

      </div>

   
   {user && (<div className="flex gap-2 justify-bwtween mr-17">
      
      <div className="dropdown dropdown-end mx-5 flex ">
      
      
      {user && (<p className='px-4 pt-2.5 '> Welcome, {user.firstName}</p>)}
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         
          {user && ( <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoUrl}/>
          </div>)
          }
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>)}
    
  </div>

    
  )
}

export default Navbar