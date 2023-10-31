import React from "react";
import Bredcrumb from "../Components/Bredcrumb/Bredcrumb";
import mango from "../images/Products/mango.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Layout from "../Components/Layout/Layout";

const Cart = () => {
  return (
    <Layout>
      <Bredcrumb title={"Cart"} />
      <div className="cart-page h-screen md:px-16 my-10">
        <h1 className="heading md:text-4xl font-bold my-4 text-blue-950">
          Shopping Cart
        </h1>
        <div className="cart-wrap flex flex-wrap justify-between">
          <div className="items min-h-96 p-3">
            <div className="item px-2 py-4 border-t flex gap-20 mb-12">
              <div className="img-wrapper  w-60 shadow">
                <img src={mango} alt="mango" className="object-contain" />
              </div>
              <div>
                <h1 className="item-name text-2xl font-bold mb-2">Fresh Mango</h1>
                <p className="category text-xl text-slate-400 font-bold mb-2">
                  Fruits
                </p>
                <form action="">
                  <select
                    name="quantityUnit"
                    id="quantityUnit"
                    className="border p-2"
                  >
                    <option value="KG">KG</option>
                    <option value="Quintal">Quintal</option>
                  </select>
                  <input
                    type="text"
                    name="acutalquantity"
                    id="acutalquantity"
                    placeholder="Enter quantity"
                    className="border ms-2 p-2 outline-none"
                  />
                </form>
              </div>
              <div>
                <button><AiOutlineClose className="md:text-2xl text-xl text-slate-400 hover:text-slate-800 duration-300" /></button>
              </div>
            </div>
            <div className="item px-2 py-4 border-t flex gap-20 mb-12">
              <div className="img-wrapper  w-60 shadow">
                <img src={mango} alt="mango" className="object-contain" />
              </div>
              <div>
                <h1 className="item-name text-2xl font-bold mb-2">Fresh Mango</h1>
                <p className="category text-xl text-slate-400 font-bold mb-2">
                  Fruits
                </p>
                <form action="">
                  <select
                    name="quantityUnit"
                    id="quantityUnit"
                    className="border p-2"
                  >
                    <option value="KG">KG</option>
                    <option value="Quintal">Quintal</option>
                  </select>
                  <input
                    type="text"
                    name="acutalquantity"
                    id="acutalquantity"
                    placeholder="Enter quantity"
                    className="border ms-2 p-2 outline-none"
                  />
                </form>
              </div>
              <div>
                <button><AiOutlineClose className="md:text-2xl text-xl text-slate-400 hover:text-slate-800 duration-300" /></button>
              </div>
            </div>
          </div>
          <div className="price-details shadow-md p-5 w-[40%] h-fit sticky top-0 bg-slate-50 rounded-md">
            <h1 className="md:text-3xl font-bold text-slate-800 mb-4">Order Summary</h1>
            <form>
              <div className="mb-3">
                <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="py-2 px-1 text-black border-b bg-transparent outline-0 w-full" />
              </div>
              <div className="mb-3">
                <input type="email" name="email" id="email" placeholder="Email Address" className="py-2 px-1 text-black border-b bg-transparent outline-0 w-full" />
              </div>
              <div className="mb-3">
                <input type="text" name="phone" id="phone" placeholder="Phone Number" className="py-2 px-1 text-black border-b bg-transparent outline-0 w-full" />
              </div>
              <div className="">
                <button className="text-xl font-bold px-4 py-2 rounded-sm text-white bg-yellow-500 hover:bg-yellow-700 duration-300 w-full">Enuiry Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
