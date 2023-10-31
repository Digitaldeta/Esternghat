import React, { useEffect, useState } from 'react'
import {BsArrowUp} from 'react-icons/bs'

const ScrollToTopbtn = () => {
        const [scrollUpBtn, setScrollUpBtn] = useState(false);

        const checkScrollY = () =>{
            if(window.scrollY > 200){
                setScrollUpBtn(true)
            }
            else{
                setScrollUpBtn(false)
            }
        }

        const handleScrollUp =()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }

        useEffect(()=>{
            window.addEventListener('scroll',checkScrollY);
        })

  return (
    <>
    <div className={`fixed right-4  ${scrollUpBtn ? "bottom-8" :"-bottom-10"} duration-500 z-[99] bg-white rounded-full drop-shadow-lg h-10 w-10 flex justify-center items-center`} >
        <button onClick={handleScrollUp}><BsArrowUp className='md:text-2xl text-base'/></button>
    </div>
    </>
  )
}

export default ScrollToTopbtn