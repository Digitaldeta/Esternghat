// import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const ProductCard = ({ img, name, category, description, id }) => {

  return (
    <>
      <div className="product shadow-lg overflow-hidden rounded-sm max-w-[15rem]">
        <div>
          <img src={img} className="object-contain" alt={img} />
        </div>
        <div className="details p-2">
          <h1 className="name text-2xl font-bold">{name}</h1>
          <h2 className="category text-xl font-bold text-slate-600">{category}</h2>
          <p className="description text-start truncate">{description}</p>
        </div>
        {/* <div className="p-2 flex justify-between">
          <button className="text-lg font-semibold bg-blue-500 text-white rounded px-4 py-1">Update</button>
          <button onClick={handleDelete} className="text-lg font-semibold bg-red-500 text-white rounded px-4 py-1">Delet</button>
        </div> */}
      </div>
    </>
  );
};

export default ProductCard;
