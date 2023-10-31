import React from 'react'
import '../../App.css'
const Newsletter = () => {
  return (
    <div className='newsletter flex px-14 items-center justify-center py-20 text-white my-4'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold my-4'>Subscibe to our newsletter for daily updates</h1>
            <input type="text" name="" id="" className='p-3 me-1 w-full outline-none text-black' placeholder='Enter your email'/>
            <button className='px-4 py-2 border-2 text-lg font-semibold my-3 hover:bg-black hover:border-black hover:text-white duration-500'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter