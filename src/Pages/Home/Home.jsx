import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import Partnerships from "../../Components/HomeData/Partnerships/Partnerships";
import useTanStack from "../../Utils/hooks/useTanStack";
import HomeCard from "../../Components/HomeData/HomeCardDetails/HomeCard";
import Spinner from "../../PagesTwo/Spinner/Spinner";



export default function Home() {
    const {setMenu} = useContext(AuthContext)
    const {data,isLoading} = useTanStack("https://tourism-server-side-blush.vercel.app/touristSpot","touristSpt")
    console.log(data);

  return (
    <>
    <div onClick={()=>setMenu(false)} >
        <Banner/>
    </div>

    <div className="my-16">
        <Partnerships/>
    </div>

    <div className="px-2">
    {isLoading ? (
          <Spinner />
        ) : (
         <div className="my-16  grid gap-6 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
            {data?.slice(0,6).map((data, idx) => (
              <HomeCard data={data} key={idx} />
            ))}
          </div>
        )}
    </div>



    </>
  )
}
