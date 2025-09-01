import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faArrowDown,faTrophy,faFilter,faFileFragment} from '@fortawesome/free-solid-svg-icons';


const HeroBanner = () => {
  return (
    <div className='main py-25 px-10 text-white bg-gradient-to-r from-[#1E0A48] to-[#2B0E68] min-h-screen flex flex-col items-center gap-5'>
        
    <div className='hero_logo flex flex-col text-center gap-2'>
        <h3 className='text-5xl font-semibold'>Find Your</h3>
        <h3 className='text-red-600 text-6xl font-extrabold'>Dream Job Now</h3>
    </div>

    <div className='search_bar w-[500px] md:w-[600px] hover:border-3 hover:border-solid hover:border-white transition-colors duration-300 cursor-pointer lg:w-[800px] border border-solid border-pink-400  rounded-full flex justify-between'>
    <div className='flex items-center w-full px-8 py-5'>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='1x' className="text-gray-400 mr-2" />
        <input className='w-full' type="text" placeholder='Search jobs, skills or companies'/>
        <FontAwesomeIcon icon={faArrowDown} />
    </div>
        <button className='w-50 bg-[linear-gradient(276deg,_#da7c25_0.36%,_#b923e1_102.06%)] rounded-full cursor-pointer hover:tracking-wide'>Find Jobs</button>
    </div>

    <div className="features flex gap-5 md:gap-12 mt-2">
        <button className='py-2 px-5 font-semibold bg-violet-900 opacity-0.8 rounded-full tracking-wide cursor-pointer'>Social Science Teacher</button>
        <button className='py-2 px-5 font-semibold bg-violet-900 opacity-0.8 rounded-full tracking-wide cursor-pointer'>Math Faculty</button>
        <button className='py-2 px-5 font-semibold bg-violet-900 opacity-0.8 rounded-full tracking-wide cursor-pointer'>Physics JEE Expert</button>
    </div>

    <div className="achivements flex gap-10 md:gap-30 mt-15 text-center">
        <div className="achivement cursor-pointer">
            <FontAwesomeIcon icon={faTrophy} size="2x" className='text-pink-800 mb-2'/>
            <p className='font-semibold tracking-wide'>Top 1% candidates, <br />3x faster hiring</p>
        </div>
        <div className="achivement cursor-pointer">
            <FontAwesomeIcon icon={faFilter} size="2x" className='text-pink-800 mb-2' />
            <p className='font-semibold tracking-wide'>Streamlined hiring <br />with AI screening</p>
        </div>
        <div className="achivement cursor-pointer">
             <FontAwesomeIcon icon={faFileFragment} size="2x" className='text-pink-800 mb-2' />
            <p className='font-semibold tracking-wide'>Advanced filtering <br />& instant scheduling</p>
        </div>
    </div>

    <div className="desc md:w-[600px] text-center tracking-wider mt-8 font-semibold">
        <p >Empowering education,coaching, and tech sectors to hire verified, ready-to-join talent faster. Find high-paying jobs that mat<span className='text-violet-500'>ch</span> your skills and goals with AI-powered screening, instant interview scheduling, and 24/7 job alerts. </p>
    </div>

    <div className="cards flex flex-wrap gap-10 md:gap-17 mt-7 px-[100px] md:px-[0px]">
        <div className="card transition duration-300 transform hover:scale-110 hover:border-4 hover:border-solid hover:border-[#ff00ff] hover:rounded-xl cursor-pointer text-center w-[200px]  h-[150px] border-[2px] border-solid border-transparent rounded-lg [border-image:linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500))_1] flex flex-col justify-center items-center ">
            <h3 className='text-2xl font-bold tracking-wider'>7500+</h3>
            <p className='text-[12px] text-gray-400 mt-1'>Jobs Available</p>
        </div>
        <div className="card transition duration-300 transform hover:scale-110 hover:border-4 hover:border-solid hover:border-[#ff00ff] hover:rounded-xl cursor-pointer text-center w-[200px] h-[150px] border-[2px] border-solid border-transparent rounded-lg [border-image:linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500))_1] flex flex-col justify-center items-center">
            <h3 className='text-2xl font-bold tracking-wider'>5500+</h3>
            <p className='text-[12px] text-gray-400 mt-1'>Companies Hiring</p>
        </div>
        <div className="card transition duration-300 transform hover:scale-110 hover:border-4 hover:border-solid hover:border-[#ff00ff] hover:rounded-xl cursor-pointer text-center w-[200px]  h-[150px] border-[2px] border-solid border-transparent rounded-lg [border-image:linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500))_1] flex flex-col justify-center items-center">
            <h3 className='text-2xl font-bold tracking-wider'>1M+</h3>
            <p className='text-[12px] text-gray-400 mt-1'>Candidates</p>
        </div>
    </div>

    </div>
  )
}

export default HeroBanner
