import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/LogoMakr-8qeBOH.png";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";



const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("successfully Logout");
        console.log(result.user);
      })
      .catch((err) => toast.error(err));
  };
  const [showTooltip, setShowTooltip] = useState(false);

  const [theme, setTheme] = useState('light')

  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
             
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/assignment/all">Assignments</NavLink>
              </li>
            <li>
                <NavLink to="/assignment/add">Create Assignments</NavLink>
              </li>
            <li>
                <NavLink to="/assignment/pending">Pending Assignments</NavLink>
              </li>
            
            <li>
                <NavLink to="/register">Register</NavLink>
              </li>
           
          
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex items-center gap-1">
              <img className="w-[50px]" src={logo} alt="" />
              <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">
                <span className="text-2xl">W</span>
                <span>isdom</span>
                <span className="text-2xl text-pretty text-blue-400">F</span>
                <span className="font-semibold text-pretty text-blue-400">orge</span>
              </h1>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/assignment/all">Assignments</NavLink>
              </li>
            <li>
                <NavLink to="/assignment/add">Create Assignments</NavLink>
              </li>
            <li>
                <NavLink to="/assignment/pending">Pending Assignments</NavLink>
              </li>
           
            <li>
                <NavLink to="/register">Register</NavLink>
              </li>
           
          </ul>
        </div>
        <div className="navbar-end items-center">
          <div className="hidden md:block lg:block">
          <label className="flex cursor-pointer gap-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              onChange={handleToggle}
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          </div>
          {user?.email ? (
            <div className="relative flex justify-between items-center">
              <div
                className="relative btn btn-ghost btn-circle avatar"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src={user?.photoURL || `https://i.ibb.co/vQSpww7/user.png`}
                  alt="user"
                />
               
              <li className="list-none"> <Link to="/submit">My Assignments</Link></li>
        
                <button
                onClick={() => handleLogOut()}
                className="btn btn-sm text-white hover:text-black bg-red-600 ml-2"
              >
                Log Out
              </button>
 
              </div>
              
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
