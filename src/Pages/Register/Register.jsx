/* eslint-disable no-dupe-keys */
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import { Fade } from "react-awesome-reveal";

export default function Register() {
  const {createUser,updateUserProfile,theme} = useContext(AuthContext)
  const [passToggle, setPassToggle] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors, isSubmitted },
  } = useForm();

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Missing Uppercase letters in your password!";
    }
    if (!/[a-z]/.test(password)) {
      return "Missing lowercase letters in your password!";
    }

    return true;
  };

  const formSubmit = (data) => {
    const { name, photo, email, password } = data;
    createUser(email, password)
      .then((users) => {
        const user = users.user;
        toast.success("Account created! Welcome!");
        //update profile
        updateUserProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch(() => {});
      })
      .catch(() => toast.error("User already exist!"));

    reset();
  };
  
  return (
    <>
      <Helmet>
        <title>TipTrove | Register</title>
      </Helmet>
      <Toaster />
      <div className="text-transparent" >*</div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center "
      >
        <div className="flex flex-col w-full max-w-md p-6 my-12 rounded-md sm:p-10 shadow-sm ">
          <div className="mb-4 text-center">
           <Fade direction="down" delay={200} triggerOnce={true} cascade={false} >
           <h1
              data-aos="zoom-in"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className="mt-1 font-bold  text-2xl  text-[#fcb040]
              "
            >
              Register here
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="500 "
              data-aos-duration="1000"
              className={`text-sm  ${theme ==="light"?'text-[#4b5664]':'text-white'} mb-2`}
            >
              Register now and be part of our community!
            </p>
           </Fade>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            action=""
            className="space-y-10"
          >
            <div className="space-y-4">
             <Fade direction="up" delay={300} triggerOnce={true} cascade={false}>
             <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-transparent outline-none focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo Url
                </label>
                <input
                  {...register("photo")}
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo url"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-[#fcb040] "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
              >
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  {...register("email")}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="500 "
                data-aos-duration="1000"
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  required
                  {...register("password", {
                    validate: validatePassword,
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer!",
                    },
                  })}
                  type={passToggle ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  bg-transparent  outline-none focus:ring-1 focus:ring-[#fcb040]"
                />

                {errors.password && isSubmitted && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPassToggle(!passToggle);
                  }}
                  className="absolute top-10 right-2"
                >
                  {passToggle ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
             </Fade>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-2 font-semibold text-xl rounded-md bg-transparent border border-[#fcb040] hover:bg-[#fcb040] text-[#fcb040] hover:text-white duration-300"
                >
                  Register
                </button>
              </div>
              <p className={`px-6 text-sm text-center ${theme === "light"?'text-gray-600':'text-white'}`}>
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline dark:text-violet-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
