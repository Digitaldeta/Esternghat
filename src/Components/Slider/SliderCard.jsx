import React from 'react'

const SliderCard = ({img,heading,description}) => {
  return (
    <>
    <div className="sliderCar w-full h-screen relative flex items-center justify-center">
    <div className="image-wrapper w-full h-[400px] absolute top-0">
        <img src={img} alt="slider" className=' object-contain'/>
        <div className="overlay absolute top-0 w-full h-screen bg-[#0000007a] bgtb">

        </div>
    </div>
    <div className="text-wrapper absolute z-10 text-center text-white px-36 mt-24">
        <h1 className="heading md:text-6xl w-2/3 font-bold mb-7 mx-auto">{heading}</h1>
        <p className="description text-lg">{description}</p>
    </div>
    </div>
    </>
  )
}

export default SliderCard