import React from 'react'
import phone from '../../assets/images/Picsart_24-11-11_11-58-28-134[1].png'
import playstoreimg from '../../assets/images/iCareIndia_playstore.png'
import './Bannerlayout2.css'
function Bannerlayout2() {
  return (
    <div className="bannerbg2 h-screen w-screen flex md:flex-row flex-col items-center justify-center md:pl-20">

      <div className='flex-col justify-center items-center'>
        <h2 className='ubuntu-bold text-3xl md:text-5xl mb-14 md:text-left text-center'>
            Download Our App Today!
        </h2>
     

        <p className='ubuntu-p text-xl  md:text-2xl  px-5  mb-10 leading-none text-center md:text-left '>
            Simplify your home maintenance with our app and
            experience the ease of getting professional help 
            when you need it. Your home deserves the best, and 
            we're here to provide it.
        </p>
   

        <a href="" className='w-full flex md:justify-start items-center flex-row justify-center'><img src={playstoreimg}  alt="" className='md:w-56 w-44 ' /></a>
      </div>
      
      <img src={phone} className='md:w-1/3 w-3/4 mt-10' alt="" />

    </div>
  )
}

export default Bannerlayout2
