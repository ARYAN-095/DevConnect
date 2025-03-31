import React from 'react'

import Logo from './assets/Logo.jpeg'

const Navigation = () => {
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

   
    <div className="flex gap-2 justify-bwtween mr-17">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
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
    </div>
  </div>

    
  )
}

export default Navigation