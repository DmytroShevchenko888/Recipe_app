import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import chicken from "./logo/chicken.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className = "shadow-md w-full fixed top-0 left-0 z-50">
      <div className='md:flex items-center justify-around bg-white py-4 md:px-10 px-7'>
        <Link to='/'>
          <div className="flex items-center">     
              <img className='lg:w-24 lg:h-24 w-12 h-12' src={chicken} alt='mealplate'/>
              <div className="flex flex-col ml-4  space-y-[-10px]">
                <h1 className="font-Belle lg:text-4xl text-2xl">Recipes Book</h1>
                <h1 className="font-Amatic lg:text-2xl text-sm">SINCE 2022</h1>
              </div>
          </div>
        </Link>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

        <div className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto 
        z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-400px]'}`}>
        
          <Link className='md:ml-8 text-2xl md:my-0 my-7' onClick={()=>setOpen(!open)} to='/'>
            <h3 className='duration-700 hover:text-red-500'>Your Main</h3>
          </Link>
          <Link className='md:ml-8 text-2xl md:my-0 my-7' onClick={()=>setOpen(!open)} to='/favorites'>
            <h3 className='duration-700 hover:text-red-500'>Your Favorites</h3>
          </Link>
        
        </div>

        
      </div>
    </div>
  )
}

export default Navbar