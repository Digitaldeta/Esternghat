import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from '../Buttons/Button'
import '../../App.css'
import {motion} from 'framer-motion'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeCarousel = () => {

  return (
    <>
      <Carousel 
      responsive={responsive}
      autoPlay={true}
      infinite
      arrows={false}
      pauseOnHover={false}
      keyBoardControl={true}
      >
      <div className="slide-1 flex justify-center items-center text-center text-white p-2">
       <div className="slide-text mt-10">
       <h2 className="text-xl text-slate-400">Lorem, ipsum dolor.</h2>
        <motion.h1
        initial={{opacity: 0,x:-4}}
        whileInView={{opacity:1, x:0}}
        className= 'md:text-7xl text-4xl mt-2'>Lorem ipsum dolor</motion.h1>
        <h4 className="mt-7 text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere doloremque perspiciatis autem.</h4>
        <div className="mt-4">
        <Button text={"Shop Now"}/>
        </div>
       </div>
      </div>
      <div className="slide-2 flex justify-center items-center text-center text-white p-2">
       <div className="slide-text mt-10">
       <h2 className="text-xl text-slate-400">Lorem, ipsum dolor.</h2>
        <motion.h1
        initial={{opacity: 0,x:-4}}
        whileInView={{opacity:1, x:0}}
        className="md:text-7xl text-4xl mt-2">Lorem ipsum dolor</motion.h1>
        <h4 className="mt-7 text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere doloremque perspiciatis autem.</h4>
        <div className="mt-4">
        <Button text={"Shop Now"}/>
        </div>
       </div>
      </div>
      <div className="slide-3 flex justify-center items-center text-center text-white p-2">
       <div className="slide-text mt-10">
       <h2 className="text-xl text-slate-400">Lorem, ipsum dolor.</h2>
        <motion.h1
        initial={{opacity: 0,x:-4}}
        whileInView={{opacity:1, x:0}}
        className="md:text-7xl text-4xl mt-2">Lorem ipsum dolor</motion.h1>
        <h4 className="mt-7 text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere doloremque perspiciatis autem.</h4>
        <div className="mt-4">
        <Button text={"Shop Now"}/>
        </div>
       </div>
      </div>
      
      </Carousel>
      ;
    </>
  );
};

export default HomeCarousel;
