import React, { useState } from 'react';
import Bredcrumb from '../Components/Bredcrumb/Bredcrumb';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '../images/eastern-ghat-logo.png';
import Layout from '../Components/Layout/Layout';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  //handle submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', { formData });
      if (res.data && res.data.success) {
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Layout>
      <Bredcrumb title="Register" />
      <section className="register bg-gray-00 md:py-24 py-10 px-4">
        <div className="bg-slate-900 max-w-xl mx-auto shadow-xl p-6 rounded-lg">
          <div className="w-32 mx-auto">
            <img className="mx-auto" src={logo} alt="easternghat" />
          </div>

          <div className="border-b border-slate-700 pb-5">
            {/* <h2 className="text-center text-4xl font-bold text-slate-300">Register</h2> */}
            <h1 className="text-xl text-center text-slate-500 font-semibold mt-2">Create A New Account</h1>
          </div>

          <div className="form-wrapper mt-5">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="fullname" className="text-lg font-semibold text-white mb-2">
                  Fullname:
                </label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Enter your fullname"
                  className="w-full p-2 text-lg outline-yellow-500 bg-slate-600 text-white rounded-md placeholder:text-slate-400 focus:shadow-none"
                  required
                  autoComplete="fullname"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-lg font-semibold text-white mb-2">
                  Email:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full p-2 text-lg outline-yellow-500 bg-slate-600 text-white rounded-md placeholder:text-slate-400 focus:shadow-none"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-lg font-semibold text-white mb-2">
                  Password:
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full p-2 text-lg outline-yellow-500 bg-slate-600 text-white rounded-md placeholder:text-slate-400 focus:shadow-none"
                  required
                  autoComplete="password"
                />
              </div>

              <div className="flex text-white text-lg gap-2">
                <input type="checkbox" name="term" id="term" required />
                <label htmlFor="term">Agree to terms & conditions</label>
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-yellow-500 text-xl font-semibold rounded-md px-4 py-1 hover:bg-yellow-700 duration-300"
                  type="submit"
                >
                  Register
                </button>
              </div>

              <div>
                <p className="text-slate-400 text-center text-lg">
                  Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
