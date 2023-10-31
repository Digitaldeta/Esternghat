import React from "react";
import img1 from "../../../assets/HomeGrid/ad-1.jpg";
import img2 from "../../../assets/HomeGrid/ad-2.jpg";
import img3 from "../../../assets/HomeGrid/ad-3.jpg";
import img4 from "../../../assets/HomeGrid/ad-4.jpg";
import imgMain from "../../../assets/HomeGrid/ad-main.jpg";

const HomeGrid = () => {
  return (
    <>
      <div className="flex md:px-14 my-4 md:flex-row flex-col gap-2">
        <div className="bg-black md:w-1/2 h-full md:mb-0 mb-2 overflow-hidden">
          <img src={imgMain} alt="" className=" duration-500 hover:scale-105"/>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2 md:gap-1 gap-2">
          <div className="w-full h-full overflow-hidden">
            <img src={img1} alt=""className="w-full duration-500 hover:scale-105" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={img2} alt="" className="w-full duration-500 hover:scale-105"/>
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={img3} alt="" className="w-full duration-500 hover:scale-105"/>
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={img4} alt="" className="w-full duration-500 hover:scale-105"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
