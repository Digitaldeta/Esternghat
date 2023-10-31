import React from "react";
import "../../App.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bredcrumb = ({ title }) => {
  return (
    <div className="bredcrumb grid place-items-center md:h-96 h-72 w-full p-0">
      <p className="flex items-center text-white text-xl ">
        <Link className="text-yellow-400" to="/">
          Home
        </Link>
        <FaAngleRight />
        <span>{title}</span>
      </p>
    </div>
  );
};

export default Bredcrumb;
