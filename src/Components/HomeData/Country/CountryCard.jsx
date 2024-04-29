/* eslint-disable react/prop-types */


export default function CountryCard({data}) {
    
    
  return (
    <>
        <div className="bg-cover cursor-pointer bg-center h-96 rounded-md" style={{backgroundImage: `url(${data?.image})`}}>
                <div className="  bg-black/35 duration-300 rounded-md hover:bg-black/70 h-full w-full px-2  " >
                    <div className="duration-300 group group hover:-translate-y-5 transition-transform h-full w-full flex justify-center items-center flex-col gap-2 ">
                        <h1 className="text-3xl text-[#fcb040] font-semibold text-center" >{data?.country_name}</h1>
                        <p className="text-sm text-white text-center" >{data?.short_description}</p>

                    </div>
                </div>
    </div>
    </>
  )
}
