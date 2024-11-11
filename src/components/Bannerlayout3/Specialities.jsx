import React from 'react'
import dropdown from '../../assets/images/iCareIndia_Dropdownarrow.png'
function Specialities({title,detail}) {
  return (
    <div >
      <div className='m-5 md:m-10 w-sreen  p-7 flex row justify-between' style={{'background-color': '#D9D9D9'}}>
        <div>
            <h2 className='ubuntu-bold text-xl md:text-3xl' > {title}</h2>
            <p className='md:text-2xl text-lg mt-5 ml-2'>{detail}</p>
        </div>
        <img className='h-10' src={dropdown} alt="" />
      </div>
    </div>
  )
}

export default Specialities
