"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faMagnifyingGlass, faBell, faShieldHalved,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import profile_pic from "../assets/profile_pic.png"

const navBar = () => {


    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <div className='text-white bg-gradient-to-r from-[#1E0A48] to-[#2B0E68] relative border-b border-solid border-[rgba(156,163,175,0.2)]'>
<div className={`leftNav px-2 fixed z-50 top-0 w-50 h-screen
    bg-[linear-gradient(to_right,rgba(30,10,72,0.9),rgba(43,14,104,0.9))]
    transition-transform duration-300 transform
    ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <FontAwesomeIcon icon={faXmark} className='absolute top-15 left-40 cursor-pointer' size='2x'onClick={toggleNav}/>
          <div className='navLinks flex items-center gap-1 mt-22 mb-5 cursor-pointer'>
        <FontAwesomeIcon icon={faTable}  size='2x'/>
        <p className='text-[12px]'>Job Category</p>
        </div>

        <div className='navLinks flex items-center mb-5 gap-1 cursor-pointer'>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
        <p className='text-[12px]'>Find Jobs</p>
        </div>

        <div className='navLinks flex items-center mb-5 gap-1 relative cursor-pointer'>
          <p className='bg-[linear-gradient(276deg,_#da7c25_0.36%,_#b923e1_102.06%)] p-[2px] text-[12px] rounded-lg absolute bottom-5 left-6'>29</p>
        <FontAwesomeIcon icon={faBell} size='2x'/>
        <p className='text-[12px]'>Notifications</p>
        </div>
</div>
    <div className='flex px-15 md:px-25 py-3 flex-wrap justify-between h-45 items-center'>
      <div className='absolute left-10 top-34 block md:hidden cursor-pointer' onClick={toggleNav}>
      <FontAwesomeIcon icon={faBars} size='2x' />
      </div>
      <div className='logo text-white flex gap-2 justify-center items-center'>
        <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
        <div className='flex flex-col justify-center tracking-wider'>
          <h4 className='text-3xl font-semibold'>Tallento.ai</h4>
          <p className='text-[10px]'>Where AI Meets Ambition</p>
        </div>
        
        </div>

        <div className='navLinks hidden md:flex flex-col items-center gap-1 cursor-pointer'>
        <FontAwesomeIcon icon={faTable}  size='2x'/>
        <p className='text-[12px]'>Job Category</p>
        </div>

        <div className='navLinks hidden md:flex flex-col items-center gap-1 cursor-pointer'>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
        <p className='text-[12px]'>Find Jobs</p>
        </div>

        <div className='navLinks hidden md:flex flex-col items-center gap-1 relative cursor-pointer'>
          <p className='bg-[linear-gradient(276deg,_#da7c25_0.36%,_#b923e1_102.06%)] p-[2px] text-[12px] rounded-lg absolute bottom-10 left-12'>29</p>
        <FontAwesomeIcon icon={faBell} size='2x'/>
        <p className='text-[12px]'>Notifications</p>
        </div>

        <div className='rounded-full border-2 border-white'>
          <img src="https://my-portfolio-five-lac-48.vercel.app/assets/profile_img-D0yY1vaP.png" className='h-18 rounded-full'/> 
        </div>
    </div>
    <button className='bg-[linear-gradient(276deg,_#da7c25_0.36%,_#b923e1_102.06%)] px-4 py-1 rounded-md absolute bottom-2 right-6 md:right-20 cursor-pointer'>+ Post a Job</button>
    </div>
  )
}

export default navBar
