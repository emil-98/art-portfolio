import React, { useState } from 'react'
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {

  const [nav, toggleNav] = useState(false);
  const handleMenuClick = () => toggleNav(!nav)

  return (
    <div className='w-full h-[80px] border-b flex absolute justify-between items-center shadow-[0_0_5px_rgba(0,0,0,0.25)] z-20'>
      <div className='h-fit w-fit px-8 shrink-0'>
        <Link to="/">
          <img src="../src/assets/ab_logo.svg" />
        </Link>
      </div>

      <h1 className='text-3xl font-serif-text sm:w-full'>
        Jane Doe Art
      </h1>

      <div className='z-30 end-0 h-fit w-fit p-8 sm:hidden flex relative' onClick={handleMenuClick}>
        {!nav ? 
            <img src='../src/assets/menu_icon.svg' className='flex'/> 
          :
            <img src='../src/assets/close_icon.svg' className='flex'/>
        }
      </div>

      {/* Desktop menu */}

      <ul className='text-gray-700 hidden sm:flex px-8 w-3/12 justify-between font-sans-text' >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile menu */}

      <ul className={`${!nav ? 'w-0 p-0 text-transparent' : 'w-5/6 p-6 shadow-[0_0_5000px_rgba(0,0,0,0.9)]'} space-y-16 z-20 overflow-hidden transition-all text-2xl items-center justify-center text-gray-700 flex flex-col absolute top-0 end-0 h-screen sm:hidden font-sans-text bg-white`}>
        <li>
          <Link to="/" onClick={handleMenuClick}>Home</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={handleMenuClick}>Gallery</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMenuClick}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar