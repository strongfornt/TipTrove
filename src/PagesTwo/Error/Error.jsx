import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "./error.json";
export default function Error() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  min-h-screen">
        <div className="max-w-sm  ">
          <Lottie animationData={error} />
        </div>
        <div className=" bg-green-800 ">
          <Link
            to="/"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white  bg-gray-800 rounded-md group"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#313336]  rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white  "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-black rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-error transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Back to home
            </span>
          </Link>
        </div>
      </div>

      
    </>
  );
}
