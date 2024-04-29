import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import Partnerships from "../../Components/HomeData/Partnerships/Partnerships";
import useTanStack from "../../Utils/hooks/useTanStack";

import Spinner from "../../PagesTwo/Spinner/Spinner";
import HomeCardSlider from "../../Components/HomeData/HomeCardDetails/HomeCardSlider/HomeCardSlider";

export default function Home() {
  const { setMenu,theme } = useContext(AuthContext);
  const { data, isLoading } = useTanStack(
    "https://tourism-server-side-blush.vercel.app/touristSpot",
    "touristSpt"
  );
  console.log(data);

  return (
    <>
      <div onClick={() => setMenu(false)}>
        <Banner />
      </div>

      <div className="my-16">
        <Partnerships />
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
         Discover breathtaking natural wonders worldwide, from towering waterfalls to vast deserts, each showcasing the power and beauty of the natural world.
        </p>
        <HomeCardSlider data={data} />
      </div>
    </>
  );
}
