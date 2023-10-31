import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <button className='py-2 px-4 text-lg font-medium bg-[#000000f6] text-white hover:bg-amber-400 duration-700 rounded'>{text}</button>
    </>
  )
}
export default Button