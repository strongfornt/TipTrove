import { useLoaderData } from "react-router-dom/dist";
import CountryCardDetails from "./CountryCardDetails";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/ContextProvider";


export default function CardRequestCountry() {
 const {theme} = useContext(AuthContext)
  const data = useLoaderData();
console.log(data[0]?.country);

  return (
    <>
      <div className="text-transparent">*</div>
      <div className="px-2 my-16">
      <h1 className={`mb-3 text-3xl font-semibold text-center   ${theme ==="light"?'text-[#4b5664]':'text-white'}`}>
             Explore <span className="text-[#fcb040]" >{data[0]?.country}'s Best</span>
        </h1>
        <p
          className={`text-base text-center mb-5 max-w-screen-sm mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
           Dive into the heart of adventure and discovery with a curated selection of tourist spots from {data[0]?.country} .
        </p>
        <div
          className={`${
            data?.length <= 2
              ? "flex items-center flex-col md:flex-row justify-center  gap-4 lg:gap-6"
              : "grid md:grid-cols-2 gap-6 lg:grid-cols-3"
          } `}
        >
          {data?.map((data, idx) => (
            <CountryCardDetails data={data} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
