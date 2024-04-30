import { useContext, useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import Partnerships from "../../Components/HomeData/Partnerships/Partnerships";
import useTanStack from "../../Utils/hooks/useTanStack";

import Spinner from "../../PagesTwo/Spinner/Spinner";
import HomeCardSlider from "../../Components/HomeData/HomeCardDetails/HomeCardSlider/HomeCardSlider";
import CountryCard from "../../Components/HomeData/Country/CountryCard";

import { useLoaderData } from "react-router-dom/dist";
import CountryCardDetails from "../../Components/HomeData/Country/CountryCardDetails";
import axios from "axios";
import Faq from "../../Components/HomeData/Faq/Faq";
import TopReview from "../../Components/TopReview/TopReview";


export default function Home() {
  const { setMenu, theme } = useContext(AuthContext);
  const [countryData,setCountryData] = useState([])
  const[loading,setLoading] = useState(true);

  const { data, isLoading } = useTanStack(
    "https://tourism-server-side-blush.vercel.app/touristSpot",
    "touristSpot"
  );
 useEffect(()=>{
    axios.get("https://tourism-server-side-blush.vercel.app/country")
    .then(res =>{
        setCountryData(res.data)
        setLoading(false)
    })
 },[])

  
console.log(countryData);

  return (
    <>
      <div onClick={() => setMenu(false)}>
        <Banner />
      </div>

      <div className="my-16 " >

      <h1 className=" mb-2 text-2xl font-semibold text-center   text-[#fcb040] ">
       Modern & Beautiful
        </h1>
        <p
          className={` text-3xl md:text-4xl lg:text-5xl text-center mb-7 md:mb-10 font-bold  mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
        Explore the World for Yourself
        </p>
          {
            loading ? <Spinner/> :  <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6  px-2  md:px-4 lg::px-8" >
            {
             countryData?.map((data,idx) => <CountryCard data={data} key={idx} />)
            }
            </div>
          }
      </div>

      <div className="my-16 px-2">
        <h1 className=" mb-3 text-2xl font-semibold text-center   text-[#fcb040] ">
          Nature's Masterpieces
        </h1>
        <p
          className={`text-sm text-center mb-8 max-w-screen-sm mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
          Discover breathtaking natural wonders worldwide, from towering
          waterfalls to vast deserts, each showcasing the power and beauty of
          the natural world.
        </p>
        {
            isLoading ? <Spinner/> :<HomeCardSlider data={data} />
        }
      </div>

     
    {/* <div className="my-16 px-4" >
        <Faq/>
    </div> */}
    <div className="my-16 ">
        <TopReview/>
    </div>

      <div className="mt-16 mb-8">
        <Partnerships />
      </div>

      
      

    </>
  );
}
