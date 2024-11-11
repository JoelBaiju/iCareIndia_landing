import React from 'react'
import Specialities from './Specialities'

function Bannerlayout3() {
  return (
    <div>

        <h2 className='ubuntu-bold text-center text-2xl mt-16 md:text-4xl '>
            Why Choose Us?
        </h2>
        <Specialities title='Trusted Professionals' detail='All our service providers are thoroughly vetted to ensure top-quality service.'/>
        <Specialities title='Convenience' detail='Book services at your convenience with just a few taps.'/>
        <Specialities title='Transparent Pricing' detail='Get upfront pricing and no hidden fees.'/>
        <Specialities title='Customer Reviews' detail='Read reviews from other users to choose the best professional for your job.'/>
       
        

    </div>
  )
}

export default Bannerlayout3
