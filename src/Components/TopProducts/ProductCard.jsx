import React, { useState } from "react";
import "../../App.css";
import Button from "../Buttons/Button";
import ProductDetails from "../../Pages/ProductDetails";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ img, name, category, desciption }) => {

  const navigate = useNavigate()
  const handleView = () =>{
    navigate('product-details')
  }

  return (
    <>
    <div>
      {" "}
      <div
        className="product md:w-[24rem] sm:w-[12rem] w-[8rem]  bg-white shadow-xl rounded-lg border group overflow-hidden mx-auto"
        
      >
        <div className="img-wrapper overflow-hidden relative w-full">
          <div className="absolute top-0 left-0 bg-[#00000060] h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 z-10">
            <button className="p-2 bg-black text-white" onClick={handleView}>
              View
            </button>
          </div>
          {/* <div>
            <span className="dicount bg-gradient-to-r from-black bg-amber-300 text-white w-[40%] p-2 z-30 absolute">17% OFF</span>
          </div> */}
          <img
            src={img}
            alt="img"
            className="object-contain h-auto max-h-[230px] w-full group-hover:scale-110 duration-500"
          />
        </div>
        <div className="product-info md:px-4 px-2 md:pt-5">
          <div className="">
            <h1 className="title md:text-2xl text-lg font-bold text-black">
              {name}
            </h1>
            {/* <h3 className="category text-lg text-slate-600 font-bold">
              {category}
            </h3> */}
          </div>
          <p className="description truncate overflow-hidden text-base text-slate-600">
            {desciption}
          </p>
        </div>
        <div className="buttons p-4 flex justify-end gap-2">
          <Button text={"Add to cart"} />
        </div>
      </div>


      
    </div>
    </>

  );
};

export default ProductCard;
