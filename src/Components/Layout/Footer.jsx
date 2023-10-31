import React from "react";
import logo from "../../images/eastern-ghat-logo.png";
import { Link } from "react-router-dom";
import fb from "../../images/Social-Icons/facebook.png";
import twitter from "../../images/Social-Icons/twitter.png";
import insta from "../../images/Social-Icons/instagram.png";
import pintrest from "../../images/Social-Icons/pinterest.png";
import icon from '../../images/payment_method_png.png'
import {SlLocationPin} from 'react-icons/sl';
import {FiMail} from 'react-icons/fi';
import {MdCall} from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full p-4 bg-gray-950 text-white md:px-14">
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-6">
            <div className="col-span-2 md:col-auto">
              <img src={logo} alt="img" className="w-32 ms-3" />
              <div className="flex gap-2 mt-4">
                <Link>
                  <img
                    src={fb}
                    alt="facebook"
                    className="hover:-translate-y-3 duration-700 w-8"
                  />
                </Link>
                <Link>
                  <img
                    src={twitter}
                    alt="facebook"
                    className="hover:-translate-y-3 duration-700 w-8"
                  />
                </Link>
                <Link>
                  <img
                    src={insta}
                    alt="facebook"
                    className="hover:-translate-y-3 duration-700 w-8"
                  />
                </Link>
                <Link>
                  <img
                    src={pintrest}
                    alt="facebook"
                    className="hover:-translate-y-3 duration-700 w-8"
                  />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="md:text-xl text-lg font-medium text-gray-400 mb-2">
                INFORMATION
              </h2>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  About Us
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  FAQs
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Quality
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  GIft Cards
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Contact Us
                </Link>
              </p>
            </div>
            <div>
              <h2 className="md:text-xl text-lg font-medium text-gray-400 mb-2">
                SHOP
              </h2>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  About Us
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  FAQs
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Quality
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  GIft Cards
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Contact
                </Link>
              </p>
            </div>
            <div>
              <h2 className="md:text-xl text-lg font-medium text-gray-400 mb-2">
                HELP CENTER
              </h2>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Deliver information
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Terms & Condition
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Return & Refund
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Privacy notice
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                  Shopping FAQs
                </Link>
              </p>
            </div>
            <div>
              <h2 className="md:text-xl text-lg font-medium text-gray-400 mb-2">
                GET IN TOUCH
              </h2>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
               <span><SlLocationPin className="inline"/></span>   Domy addesss main office sdjghdfgsdufg
                </Link>
              </p>
              <p className="mb-1">
                {" "}
                <Link className="duration-700 hover:text-slate-400 text-base">
                <span><FiMail className="inline"/></span>  mail@gmail.com
                </Link>
              </p>
              <div className="mb-1">
                {" "}
                <div className="duration-700 hover:text-slate-400 text-base">
                  Need help call us on <br />
                 <span><MdCall className="inline"/></span> <Link to={"tel:+913209234893"}>99999999999</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10  border-b border-slate-400 mb-6 py-4">
            <p className="mb-2 text-lg">PPAYMENTS WE ACCEPT</p>
            <img src={icon} alt="icon" className="w-[40%] mx-auto"/>
          </div>
            <div className="text-center">
                <p className="text-[.9rem] text-slate-600">Esterghat &#169; 2023 . All rights reserved. Developed by <span className="text-sky-600">DIGITALDETA</span></p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
