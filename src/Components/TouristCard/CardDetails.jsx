import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData} from "react-router-dom";

import "leaflet/dist/leaflet.css";

import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IoIosTime } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/ContextProvider";


export default function CardDetails() {
    const {theme} = useContext(AuthContext)
  const data = useLoaderData();
  const {
    photo,
    spot,
    country,
    location,
    description,
    cost,
    seasonality,
    time,
    visitor,
    _id,
  } = data || {};
  

  
  return (
    <>
      <Helmet>
        <title>TipTrove | cardDetails</title>
      </Helmet>
      <div className="text-transparent">*</div>
      <div
        data-aos="zoom-in"
        data-aos-delay="1000 "
        data-aos-duration="1000"
        className="px-4 md:px-8 lg:px-10"
      >
        <section className="  ">
          <div className="container flex flex-col-reverse justify-center my-8  mx-auto sm:my-12 lg:mt-24 lg:mb-16 lg:flex-row lg:justify-between xl:justify-evenly ">
            <div className="flex flex-col justify-center text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1
                data-aos="zoom-in"
                data-aos-delay="1200 "
                data-aos-duration="1200"
                className={`text-3xl font-bold leading-none sm:text-4xl ${theme ==="light"?'text-[#383737] ':'text-white'}`}
              >
               {spot},{country}.
              </h1>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="1400 "
                data-aos-duration="1400"
                className="flex items-center gap-1 mt-4 "
              >
                <FaLocationDot className="text-[#fcb040]" />
                <span className={`text-base ${theme ==="light"?'text-[#383737] ':'text-white'}`}>{location}</span>
              </p>
              {/* rent and price */}
              <div className="mt-2">
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className={` py-1    ${theme ==="light"?'text-[#383737] ':'text-white'} font-semibold flex items-center gap-1`}
                >
                    <IoIosTime className="text-lg text-[#fcb040]" />
                   {time}
                </button>
              </div>
              <div className="space-x-4 sm:space-x-6 my-2 ">
                 <button
                  data-aos="zoom-in-right"
                  data-aos-delay="1600 "
                  data-aos-duration="1600"
                  className="px-4 py-1 bg-info rounded-md text-white font-semibold"
                >
                  ${cost} / <span className="text-sm text-gray-100">per person</span>
                </button>
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="px-4 py-1 bg-accent rounded-md  text-white font-semibold"
                >
                  Season - {seasonality}
                </button>


              </div>
              <div>
               

                <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className={`mt-1 mb-3 text-base   ${theme ==="light"?'text-[#4b5664]  ':'text-white/75'} sm:mb-3 `}
              >
                <span className={`text-lg font-semibold  ${theme ==="light"?'text-[#383737] ':'text-white'} `}>
                  Visitor per year
                </span>{" "}
                - {visitor}
              </p>

              </div>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className="mt-1 mb-3 text-base text-[#968f8f] sm:mb-3  "
              >
                <span className={`text-lg font-semibold ${theme ==="light"?'text-[#383737] ':'text-white'}`}>
                  Description
                </span>{" "}
                - {description}
              </p>
              <div className="">
               
              

                <div className="mt-8">
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="2600 "
                    data-aos-duration="2600"
                    className={`text-3xl mb-4 font-bold leading-none sm:text-4xl  ${theme ==="light"?'text-[#4b5664] ':'text-white'}`}
                  >
                    Location on map -
                  </h1>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2600 "
                    data-aos-duration="2600"
                    className="rounded-xl mb-4 -z-30 "
                  >
                      <MapContainer className={`-z-30 ${theme !=="light" &&'border-2'} rounded-md`} center={[10.8231, 106.6297]} zoom={5} style={{ height: '400px', width: '100%' }}>
                      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.8231, 106.6297]}>
        <Popup>
        Southeast Asia
        </Popup>
      </Marker>
    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex   items-center lg:px-6 xl:px-0 mt-8  justify-center rounded-xl  mb-5  lg:mt-0 h-80 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
              <img
                data-aos="zoom-in"
                data-aos-delay="1000 "
                data-aos-duration="1000"
                src={photo}
                alt=""
                className={`sm:object-cover ${theme !=="light" && 'border-2 border-gray-500'} lg:object-cover w-full  rounded-xl h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128`}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
