import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/dist";

// import { AuthContext } from "../ContextProvider/ContextProvider";
// import profile from "./../assets/house/deFaultProfile1.png";
import { useLocation } from "react-router-dom";
import { calculateScrollbarWidth } from "./ScrollBar";

import OutsideClickHandler from "react-outside-click-handler";
import { SiReactrouter } from "react-icons/si";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
    // const { user, logOut, loading } = useContext(AuthContext);
    // const handleLogout = () => {
    //   logOut()
    //     .then(() => console.log("log out "))
    //     .catch(() => console.log("something is wrong"));
    // };

  useEffect(() => {
    if (menu) {
      const scrollbarWidth = calculateScrollbarWidth();

      document.body.style.paddingRight = `${scrollbarWidth}px`;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";

      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const navLinks = (
    <>
      <NavLink
        to="/"
        
        className={({ isActive }) =>
          isActive
            ? ` text-[#fcb040] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#fcb040] duration-300  `
        }
      >
        <p className="">
          Home
        
        </p>
      </NavLink>
      <NavLink
        to="/register"
        
        className={({ isActive }) =>
          isActive
            ? ` text-[#fcb040] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#fcb040] duration-300 `
        }
      >
        <p className="">
          Register
        
        </p>
      </NavLink>
      <NavLink
        to="/Login"
      
        className={({ isActive }) =>
          isActive
            ? ` text-[#fcb040] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#fcb040] duration-300 `
        }
      >
        <p className="">
          Login
        
        </p>
      </NavLink>
      {/* <NavLink
        
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? ` text-[#fcb040] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#fcb040] duration-300 `
        }
      >
        <p className="">
          Pages
        
        </p>
      </NavLink> */}
    </>
  );

  return (
    <>
      <header className="relative  ">
        <div
          className={`navbar px-2  md:px-8  ${
            scrollY < 199
              ? "top-[0.1px] bg-transparent shadow-sm"
              : scrollY > 199
              ? "   flex"
              : "hidden"
          } ${
            scrollY > 220
              ? "lg:fixed bg-white top-0 transition-all duration-500 flex shadow-sm "
              : "absolute -top-32 "
          }`}
        >   
          <div className="navbar-start">
            
            <a className=" text-2xl font-bold  text-[#fcb040] ">
              <span className="text-3xl font-bold">T</span>ip
              <span className="  font-bold text-[#4b5664] ">Trove</span>
            </a>
          </div>
          <div className="navbar-end hidden lg:flex"></div>
          <div className="navbar-end">

            {/* responsive menu start */}
            <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
            <div className="items-center flex   md:hidden">
              <label className=" swap swap-rotate  border-none  ">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={() => {
                    setMenu(!menu);
                  }}
                  checked={menu ? true : false}
                />

                {/* hamburger icon */}

                <svg
                  className={`swap-off fill-current z-30 `}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className={`swap-on fill-current z-30 `}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>

            <ul
            onClick={() => setMenu(false)}
              tabIndex={0}
              className={`menu absolute mr-6  -left-64 -translate-y-[3.6rem] min-w-60 menu-sm md:hidden text-xl  dropdown-content border-r   border-success border-opacity-60 
                   mt-3 z-[10] shadow-lg bg-base-100  min-h-screen  rounded-r-xl   gap-2    ${
                menu && " -left-[0.1rem]  duration-300 transition-all  "
              }`}
            >
              {/* {user && (
                <li className="flex  items-center    ">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring-1 ring-accent ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL || profile} />
                    </div>
                  </div>
                  <div>
                    <h2
                      className={`text-lg font-bold  ${
                        location.pathname == "/"
                          ? "text-white"
                          : "text-[#191515]"
                      }`}
                    >
                      {user?.displayName || "Anonymous"}
                    </h2>
                  </div>
                </li>
              )} */}

              <li
                className={` rounded-md bg-gray-800 text-white  `}
                // ${user ? "" : "mt-16"}
              >
                <p className={`flex items-center p-2 space-x-3 rounded-md  `}>
                  <SiReactrouter
                    className={`text-xl  ${
                      location.pathname == "/" ? "text-red-800" : "text-white"
                    } `}
                  />
                  <span>Route</span>
                </p>
              </li>
              {navLinks}

              <div
                className={`${
                  location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                } w-full inline-flex h-[1px] my-2`}
              ></div>
              {/* <li className="">
                {user ? (
                  <button
                    onClick={()=>{
                      handleLogout()
                      setMenu(false)
                    }}
                    className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
              ${
                location.pathname == "/"
                  ? "border-base-200 text-base-200"
                  : "border-gray-800 text-gray-800"
              }
              `}
                  >
                    <span
                      className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                        location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                      } group-hover:h-full opacity-90`}
                    ></span>
                    <span
                      className={`relative ${
                        location.pathname == "/"
                          ? "group-hover:text-gray-800"
                          : "group-hover:text-white"
                      }`}
                    >
                      Logout
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenu(false)}
                    className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
              ${
                location.pathname == "/"
                  ? "border-base-200 text-base-200"
                  : "border-gray-800 text-gray-800"
              }
              `}
                  >
                    <span
                      className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                        location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                      } group-hover:h-full opacity-90`}
                    ></span>
                    <span
                      className={`relative ${
                        location.pathname == "/"
                          ? "group-hover:text-gray-800"
                          : "group-hover:text-white"
                      }`}
                    >
                      Login
                    </span>
                  </Link>
                )}
              </li> */}
            </ul>
          </OutsideClickHandler>
            {/* responsive menu end    */}



            <ul onClick={() => setMenu(false)} className="menu menu-horizontal px-1 gap-8 hidden  md:flex">
                {
                    navLinks
                }
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
