import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import TouristCard from "../../Components/TouristCard/TouristCard";
import useTanStack from "../../Utils/hooks/useTanStack";
import Spinner from "../../PagesTwo/Spinner/Spinner";


export default function AllTouristSpot() {
  const { theme } = useContext(AuthContext);
  const [api, setApi] = useState(null);
  const [key, setKey] = useState(null);
  const { data, isLoading } = useTanStack(api, key);

  useEffect(() => {
    setApi("https://tourism-server-side-blush.vercel.app/touristSpot");
    setKey("touristSpot");
  }, []);

  const handleSort = (e) => {
    if (e.target) {
      setApi("https://tourism-server-side-blush.vercel.app/touristSpotSort");
      setKey("touristSpotSort");
      

    }
  };   


  return (
    <>
      <Helmet>
        <title>TipTrove | AllTouristSpot</title>
      </Helmet>

      <div className="text-transparent">*</div>

      <div className="my-20 px-4  md:px-8 ">
        <h1 className=" mb-3 text-2xl font-semibold text-center   text-[#fcb040] ">
          Explore Spectacular Tourist Spots
        </h1>
        <p
          className={`text-sm text-center max-w-screen-sm mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
          Embark on a virtual tour of iconic landmarks and cultural treasures
          from around the globe. Immerse yourself in the rich history, vibrant
          culture, and awe-inspiring beauty of the world's most renowned tourist
          destinations.
        </p>

        <div className="mx-auto flex items-center justify-center my-10">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>SortBy</summary>
                <ul className="  rounded  pt-0 pb-0   w-fit ">
                  <button onClick={handleSort} className="btn-sm btn rounded ">
                    Average cost
                  </button>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
         <div className="my-16  grid gap-6 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {data?.map((data, idx) => (
              <TouristCard data={data} key={idx} />
            ))}
          </div>
        )}




      </div>
    </>
  );
}
