/* eslint-disable react/prop-types */

import { Link } from "react-router-dom/dist"


export default function CountryCard({data}) {
    
    const{image,country_name,short_description,} = data || {}
  return (
    <>
       <Link to={`/countryCard/${country_name}`}>
       <div className="bg-cover cursor-pointer bg-center h-96 rounded-md" style={{backgroundImage: `url(${image})`}}>
                <div className="  bg-black/30 duration-300 rounded-md hover:bg-black/70 h-full w-full px-2  " >
                    <div className="duration-300 group group hover:-translate-y-5 transition-transform h-full w-full flex justify-center items-center flex-col gap-2 ">
                        <h1 className="text-3xl text-yellow-400 font-bold text-center" >{country_name}</h1>
                        <p className="text-sm text-white text-center" >{short_description}</p>

                    </div>
                </div>
    </div>
       </Link>
    </>
  )
}
