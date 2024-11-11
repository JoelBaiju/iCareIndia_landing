import React from 'react'
import icilogo from '../../assets/images/iCareIndia_logo.png'
import playstoreimg from '../../assets/images/iCareIndia_playstore.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()

  return (
    <div style={{'background-color': '#D9D9D9'}} className='flex flex-col items-center'>

        <div className=' w-screen flex flex-col justify-around md:flex-row mt-10'  >
            <div className='md:w-1/3  w-full  p-10'>
                <img src={icilogo} className='md:w-52 w-36 my-5 md:my-10' alt="" />
                <p className='ubuntu-p md:text-lg text:sm my-5 md:my-10 '>Empower Your Home Maintenance with Trusted Professionals</p>
                <a href=""><img src={playstoreimg}  alt="" className='md:w-48 w-28 my-5 md:my-10' /></a>

            </div>

            <div className='md:w-1/3 w-full  p-10'>
                <p className='ubuntu-p md:text-2xl text-2xl md:mt-12'>Company</p>
                <a href=""> <p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' onClick={(e)=>(navigate('/terms'))} >Terms and Condition</p></a>
                <a href=""><p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' onClick={(e)=>(navigate('/privacy'))}>Privacy Policy</p></a>
                <a href=""><p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' onClick={(e)=>(navigate('/return'))}>Return Policy</p></a>
                
            </div>

            <div className='md:w-1/3 w-full  p-10'>
                <p className='ubuntu-p md:text-2xl text-2xl md:mt-12'>Company</p>
                <p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' >icareindia2@gmail.com</p>   
                <p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' >+91 8921765007</p>
            </div>

        </div>
        <p className='ubuntu-footer-points md:text-xl text-lg md:mt-2' >All right reserved @ iCareIndia</p>
    </div>
  )
}

export default Footer
