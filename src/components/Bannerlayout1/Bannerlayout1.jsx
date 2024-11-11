import React from 'react'
import icilogo from '../../assets/images/iCareIndia_logo.png'
import banner1bg from '../../assets/images/iCareIndia_Banner1_bg.jpeg'
import './Bannerlayout1.css'

function Bannerlayout1() {
  return (
    <div className='relative'>
      <div className="bannerbg relative z-10 h-screen w-screen  ">
        {/* <img src={banner1bg} className='h-screen w-screen' alt="" /> */}
      </div>
      <div className="absolute top-3 left-4 md:top-10 md:left-7 md:w-full z-20">
        <a href=""><img src={icilogo}  alt="" className='md:w-60 w-40' /></a>
      </div>
      <div className="absolute top-0 flex md:justify-start  md:bg-opacity-0 justify-center  items-center  h-screen  md:left-10 md:text-3xl  w-full z-20">
        <h2 className='ubuntu-bold text-5xl  text-white  md:text-black  text-center md:text-left leading-none md:text-5xl md:w-1/2 w-4/5 '>
          Empower Your Home Maintenance with Trusted Professionals
        </h2>
      </div>
    </div>
  )
}

export default Bannerlayout1
