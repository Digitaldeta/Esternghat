import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-slate-900">
      <div>
        <ul className="flex flex-col py-16 ps-10 text-xl font-bold text-slate-400 shadow-sm">

          <NavLink
            to={"/admin/product"}
            className={({ isActive }) =>
              `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
              }`
            }
          >
            All Products
          </NavLink>
          <NavLink
            to={"/admin/create-product"}
            className={({ isActive }) =>
              `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
              }`
            }
          >
            Add New Product
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
