import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className='bg-[#181818] text-white h-20 flex items-center justify-between px-8 border-b border-gray-800'>

      <div> 
        <img className='h-10'src='https://www.royalenfield.com/content/dam/RE-Platform-Revamp/re-revamp-commons/logo.webp'alt='logo'/>
      </div>
      <div className='flex items-center gap-10 '>
      <ul className='hidden md:flex items-center gap-10 text-[18px] font-light tracking-wide'>

        <li>Motorcycles</li>
        <li>Shop</li>
        <li>Service</li>
        <li>Ride</li>
        <li>MotoCulture</li>
        <li>Explore</li> 

        </ul>

        </div>
      
      <div className='flex items-center gap-6'>

        <FaLocationDot className='text-2xl' />

        <FaUser className='text-2xl' />

       <IoLanguageSharp className='text-2xl' />


      </div>
    </nav>
  )
}