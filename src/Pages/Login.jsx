import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../Components/Bredcrumb/Bredcrumb';
import logo from '../images/eastern-ghat-logo.png';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';
import { toast } from 'react-toastify';
import { useAuth } from '../Components/context/auth';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [auth, setAuth] = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/login', { formData });
      if (res.data && res.data.success) {
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };

  return (
    <Layout>
      <Breadcrumb title="Login" />
      <section className="register bg-gray-00 md:py-24 py-10 px-4">
        <div className="bg-slate-900 max-w-xl mx-auto shadow-xl p-6 rounded-lg">
          <div className="w-32 mx-auto">
            <img className="mx-auto" src={logo} alt="Your Company" />
          </div>
          <div className="border-b border-slate-700 pb-5">
            {/* <h2 className="text-center text-4xl font-bold text-slate-300">Login</h2> */}
            <h1 className="text-2xl mt-2 text-center text-slate-500 font-semibold">
              We're Happy To See You Back!
            </h1>
          </div>
          <div className="form-wrapper mt-5">
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="text-lg font-semibold text-white mb-2">
                  Email:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 text-lg outline-yellow-500 bg-slate-600 text-white rounded-md placeholder:text-slate-400 focus:shadow-none"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="Enter your password"
                  className="w-full p-2 text-lg outline-yellow-500 bg-slate-600 text-white rounded-md placeholder:text-slate-400 focus:shadow-none"
                  required
                  autoComplete="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex text-white text-lg gap-2">
                <input type="checkbox" name="term" id="term" />
                <label htmlFor="term">Remember me</label>
              </div>
              <div className="flex justify-center">
                <button className="bg-yellow-500 text-xl font-semibold rounded-md px-4 py-1 hover:bg-yellow-700 duration-300" type="submit">
                  Login
                </button>
              </div>
              <div>
                <p className="text-slate-400 text-center text-lg">
                  Don't have an account? <Link to={'/register'} className="text-blue-600">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
