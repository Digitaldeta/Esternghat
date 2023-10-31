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
import { motion } from "framer-motion";
import { useAuth } from "../context/auth";

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
  const handleDropDown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
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
          className={`w-full navbar flex justify-between items-center md:px-14 px-6 py-2 z-40 ${nav
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
                  `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
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
                  `font-medium py-2 hover:text-amber-300  duration-500 ${isActive ? "text-amber-300 " : ""
                  }`
                }
              >
                Our Store
              </NavLink>
              <div className="absolute bg-white text-black p-2 hidden group-hover:block duration-300">
                <p><Link>category</Link></p>
                <p><Link>category</Link></p>
                <p><Link>category</Link></p>
                <p><Link>category</Link></p>
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

            {/* User Login register */}

            {!auth.user ? (
              <button className="relative" onClick={handleDropDown}>
                <AiOutlineUser className="inline relative" />
              </button>
            ) : (
              <div
                className="cursor-pointer relative h-10 w-10 rounded-full flex justify-center items-center bg-blue-600 text-white"
                onClick={handleDropDown}
              >
                {auth.user && auth.user.fullname.charAt(0)}
              </div>
            )}

            {isDropdownOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  y: -10,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.1,
                }}
                className={`absolute top-12 right-0 text-lg bg-white text-black text-start py-1 rounded-md`}
              >
                {!auth.user ? (
                  <>
                    <p className="px-5 duration-500 mb-2 hover:bg-gray-100">
                      <Link to="/login">Login </Link>
                    </p>
                    <p className="px-5 duration-500 hover-bg-gray-100">
                      <Link to="/register">Register </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="px-5 duration-500 mb-2 hover:bg-gray-100">
                      {
                        auth.user.role === 1 ?
                          <Link to={'/admin'}>Dashboard</Link>
                          :
                          <Link to={'/profile'}>Profile</Link>
                      }
                    </p>
                    <p className="px-5 duration-500 hover-bg-gray-100">
                      <Link to="/login" onClick={handleLogout}>Logout </Link>
                    </p>
                  </>
                )}

              </motion.div>
            )}
            <p>
              <Link to='/cart'><AiOutlineShoppingCart /></Link>

            </p>

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
