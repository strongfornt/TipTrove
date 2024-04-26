import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom/dist";

export default function TopHeader() {
  return (
    <div className=" bg-red-800 ">
        
      <div className="bg-[#232020]   hidden  md:flex justify-between items-center px-4  md:px-8 md:py-2  ">
        <div className="flex items-center gap-6  md:gap-10">
          <div className="flex gap-2 items-center ">
            <h1 className="text-[#fdfcfc] text-[12px] font-medium">FOLLOW US:</h1>
            <div className="flex gap-2 items-center text-[12px] text-[#fdfcfc]   ">
              <FaFacebookF className="cursor-pointer hover:text-yellow-300 duration-300" />
              <FaTwitter className="cursor-pointer hover:text-yellow-300 duration-300" />
              <BiLogoInstagramAlt className="cursor-pointer hover:text-yellow-300 duration-300" />
            </div>
          </div>

          {/* call icons */}
          <div className="text-[#fdfcfc] flex  items-center gap-2 text-[12px] font-bold">
            <IoMdCall className="text-yellow-300 text-base"  />
            <p className="font-semibold">13-543-135</p>
          </div>
        </div>

        {/* login and register button */}
        <div className="flex gap-3">
       <Link to='/login' >
       <button className="text-[#fdfcfc] font-medium text-[12px]   hover:text-yellow-300 duration-300 " >Login</button>
       </Link>
    <Link to='/register'>
    <button className="text-[#fdfcfc] font-medium text-[12px]  hover:text-yellow-300 duration-300 " >Register</button>
    </Link>
        </div>
      </div>
    </div>
  );
}
