import logo from "../../images/eastern-ghat-logo.png";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart
} from "react-icons/ai";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import {RiArrowDropDownFill} from 'react-icons/ri'

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Our Store", to: "/store", id: 2 },
  { name: "Esternghat", to: "/about-esternghat", id: 3 },
  { name: "Contact", to: "/contact", id: 4 },
];

const Navbar = () => {
  const [auth, setAuth] = useAuth()
  const [nav, SetNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ""
    })
    localStorage.removeItem('auth')
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      SetNav(true);
    } else {
      SetNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('click', () => {
      setIsDropdownOpen(false)
      // setIsSidebarOpen(false)
    })
    // return (
    //     window.removeEventListener('scroll', handleScroll)
    // )
  });

  return (
    <>
      <header className="header text-white">
        <div
          className={`${searchBar
            ? "h-screen bg-[#00000083] translate-y-0  z-50"
            : "-translate-y-[240px] h-0"
            } fixed top-0 transition-all  duration-500  ease-in-out w-full`}
        >
          <button
            className="absolute right-16 top-10 text-black text-4xl font-bold hover:rotate-180 duration-500 hover:ease-in-out hover:text-yellow-600"
            onClick={() => setSearchBar(false)}
          >
            <AiOutlineClose />
          </button>
          <div className="w-full pt-14 bg-white">
            <SearchBar />
          </div>
        </div>
        <nav
          className={`w-full navbar flex justify-between items-center md:px-14 px-6 py-6 z-40 ${nav
            ? " fixed top-0 duration-500 text-white bg-[#000000ec]"
            : " duration-500 bg-transparent absolute"
            } z-20`}
        >
          <div className="logo-wrapper md:w-24 w-20">
            <Link to="/">
              {" "}
              <img src={logo} alt="img" className="logo" />
            </Link>
          </div>
          <ul className="navlist md:flex hidden md:relative  gap-4 items-center text-xl ms-8">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-200 " : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="relative group">
              <NavLink
                to={"/store"}
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-amber-300  duration-500 ${
                    isActive ? "text-amber-300 " : ""
                  }`
                }
              > Our Store
              </NavLink>
                <RiArrowDropDownFill className="inline ms-2" />
              <div className="absolute bg-white rounded-sm text-black p-2 w-full hidden group-hover:block duration-300 dropdown shadow-md">
                  <p className="p-1 hover:bg-slate-300 duration-300"><Link className="block">Fruits</Link></p>
                  <p className="p-1 hover:bg-slate-300 duration-300"><Link className="block">Nuts</Link></p>
                  <p className="p-1 hover:bg-slate-300 duration-300"><Link className="block">Crops</Link></p>
              </div>
            </li>
            <li>
              <NavLink
                to={"/about-esternghat"}
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
                  }`
                }
              >
                Esternghat
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-amber-300 duration-500 ${isActive ? "text-amber-300 " : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* ==========Sidebar=========== */}

          <ul
            className={`bg-[#000000ec] md:hidden fixed left-0 top-0 w-[50%] h-screen flex flex-col justify-center items-center gap-5 z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-96"
              } duration-300 ease-linear `}
          >
            {links.map(({ name, to, id }) => {
              return (
                <li className="md:text-2xl text-lg" key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
                      }`
                    }
                    key={id}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-3 text-2xl items-center relative">
            <button onClick={() => setSearchBar(true)}>
              <AiOutlineSearch />
            </button>
            <p>
              <Link to='/cart'><AiOutlineShoppingCart /></Link>
            </p>

            {/* User Login register */}
              <div className="relative group shadow-md">
            {!auth.user ? (
              <button className="relative">
                <AiOutlineUser className="inline relative" />
              </button>
            ) : (
              <div
                className="cursor-pointer relative h-9 w-9 p-1 rounded-full flex justify-center items-center bg-blue-600 text-white"
              >
                {auth.user && auth.user.fullname.charAt(0).toUpperCase()}
              </div>
            )}

              <div
                className="group-hover:block hidden dropdown absolute top-8 right-0 text-lg bg-white shadow-md text-black text-start p-1 rounded-md"
              >
                {!auth.user ? (
                  <>
                    <p className="px-5 duration-500 mb-2 hover:bg-gray-300">
                      <Link className="block" to="/login">Login </Link>
                    </p>
                    <p className="px-5 duration-500 hover:bg-gray-300">
                      <Link className="block" to="/register">Register </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="px-5 duration-500 mb-2 hover:bg-gray-300">
                      {
                        auth.user.role === 1 ?
                          <Link className="block" to={'/admin'}>Dashboard</Link>
                          :
                          <Link className="block" to={'/profile'}>Profile</Link>
                      }
                    </p>
                    <p className="px-5 duration-500 hover:bg-gray-300">
                      <Link className="block" to="/login" onClick={handleLogout}>Logout </Link>
                    </p>
                  </>
                )}


              </div>
              </div>

          
                      {/* ==========Humburger========= */}
            <div className="md:hidden flex justify-center items-center">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
