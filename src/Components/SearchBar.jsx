import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai' 

const SearchBar = () => {
  return (
    <>

    <div className='w-full h-40 text-center bg-white z-20'>
        <form className='relative'>
        <input type="text" name="searchItem" id="searchItem" placeholder='Search here...' className='w-1/2 text-black border-2 border-slate-400 rounded-s-md py-2 px-3 outline-slate-900'/>
        <button className='bg-black p-3 text-xl absolute'><AiOutlineSearch/></button>
        </form>
    </div>

    </>
  )
}

export default SearchBar