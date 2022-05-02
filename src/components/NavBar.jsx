import React from 'react'

const NavBar = () => {
  return (
    <div data-theme="winter" className="sticky top-0 navbar bg-base-100  bg-opacity-40 backdrop-blur-md w-full justify-center pl-0  mx-auto py-3 border-b-2 border-b-base-100 ">
  <div className="navbar-start justify-start ">
  <div className='select-none bg-white ml-10'>
  <h1 className=' px-8 text-gray-600 text-3xl font-mono font-bold first-letter:text-primary'> UniLink</h1>
  </div>
  </div>
  <div className="navbar-center hidden md:flex mx-10">
    <ul className="menu menu-horizontal p-0 font-semibold ">
    <li className='hover:text-primary'><a>Home</a></li>
    <li className='hover:text-primary'><a>Getting Started</a></li>
    <li className='hover:text-primary'><a>Docs & contracts</a></li>
    <li className='hover:text-primary'><a>Contact</a></li>
    </ul>
  </div>
  <div class="md:navbar-end">
    <button className=' transition-all duration-200 mr-20 btn btn-md btn-primary font-bold normal-case btn-outline rounded-xl hover:scale-110 hover:translate-y-1 hover:text-white
      '>Launch App</button>
     
  </div>
</div>
  )
}

export default NavBar