import React from 'react'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'

const Pagination = () => {
  return (
    <>
    <div className="pagination my-10">
  <ul className='flex justify-center gap-2'>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'><FaAngleLeft/></li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center bg-blue-700 text-white duration-300 hover:border'>1</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'>2</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'>3</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'>4</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'>5</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'>6</li>
    <li className='cursor-pointer border-2 rounded-full h-10 w-10 text-lg font-semibold grid place-items-center hover:bg-blue-700 hover:text-white duration-300 hover:border'><FaAngleRight/></li>
  </ul>
</div>
    </>
  )
}

export default Pagination