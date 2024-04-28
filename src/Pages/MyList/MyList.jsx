import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import NotFoundData from "../../Components/NotFoundData/NotFoundData";

import TouristCard from "../../Components/TouristCard/TouristCard";
import Spinner from "../../PagesTwo/Spinner/Spinner";

import axios from "axios";
import MyListCard from "./MyListCard";

export default function MyList() {
  const { theme, user } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://tourism-server-side-blush.vercel.app/touristSpotList/${user?.email}`
        )
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        });
    }
  }, [user?.email]);

  console.log(user?.email);

  console.log(data);

  return (
    <>
      <Helmet>
        <title>TipTrove | MyList</title>
      </Helmet>

      <div className="text-transparent">*</div>

      <div className="my-20 px-4 md:px-8">
        {/* title start */}
        <div className="flex flex-col justify-center items-center gap-2 mb-3">
          <h1
            className={`text-xl ${
              theme === "light" ? "text-[#4b5664]" : "text-white"
            } font-medium `}
          >
            <span className="text-[#fcb040]">Hey!</span>{" "}
            {user?.displayName || "Anonymous"}.
          </h1>
          <p
            className={`${
              theme === "light" ? "text-[#4b5664]" : "text-white"
            }  text-base text-center`}
          >
            Your Global Gallery Awaits! Browse Your Exclusive Collection of
            Tourist spots.
          </p>
        </div>

        {/* title end */}

        

        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : data?.length ? (
            <div>
            <MyListCard data={data} />
        </div>
        ) : (
          <div>
            <NotFoundData />
          </div>
        )}
      </div>
    </>
  );
}
