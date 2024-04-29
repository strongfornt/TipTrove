/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useContext } from "react";

import { IoIosTime } from "react-icons/io";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Pagination, Autoplay,  Keyboard} from 'swiper/modules';


import { AuthContext } from '../../../../AuthProvider/ContextProvider';

export default function HomeCardSlider({data}) {
    const{theme} = useContext(AuthContext)
   
  

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          keyboard={true}
       
        modules={[Pagination,Autoplay,Keyboard]}
        className="mySwiper"
      >

        {
            data?.slice(0,6).map((data,idx)=> <SwiperSlide key={idx} >
            <>
      <div 
      data-aos="zoom-in-up"
      data-aos-delay="500 "
      data-aos-duration="1000"
      className={`p-6  rounded-md shadow-md ${theme ==="light"?'bg-gray-50':'bg-gray-50'}  text-gray-900 `}>
       <div className="rounded-md overflow-hidden">
       <img


          src={data?.photo}
          alt=""
          className="object-cover object-center w-full hover:scale-110 duration-300  transition-all rounded-md h-72 dark:bg-gray-500"
        />
       </div>
        <div className="mt-6 mb-2">
          <span 
          data-aos="zoom-in-up"
          data-aos-delay="1000 "
          data-aos-duration="1200"
          className="block text-xs font-medium tracking-widest uppercase text-[#fcb040]">
           {data?.spot}
          </span>
          <h2 
          data-aos="zoom-in-up"
          data-aos-delay="1200 "
          data-aos-duration="1200"
          className="text-xl font-semibold tracking-wide text-[#4b5664] ">
          {data?.country}
          </h2>
          

          <div className="flex justify-between items-center ">
          <p 
          data-aos="zoom-in-up"
          data-aos-delay="1400 "
          data-aos-duration="1400"
          className="flex items-center gap-1 ">
            
            <FaLocationDot className="text-lg text-[#fcb040]" />

            <span className="text-base text-[#4b5664]">
              {" "}
            
            {data?.location}
            </span>
          </p>
          {/* <p 
          data-aos="zoom-in-up"
          data-aos-delay="1800 "
          data-aos-duration="1800"
          className=" font-semibold text-[#4b5664] ">${cost} /</p> */}
        
        </div>
        <div className="flex flex-col    ">
          {/* <p 
          data-aos="zoom-in-up"
          data-aos-delay="1400 "
          data-aos-duration="1400"
          className="flex font-semibold text-[#4b5664] text-base items-center gap-1 ">
            Season -
            <span className="font-normal     text-[#4b5664]">
              {" "}
            
            {seasonality}
            </span>
          </p> */}
          <p 
          data-aos="zoom-in-up"
          data-aos-delay="1800 "
          data-aos-duration="1800"
          className=" font-semibold text-[#4b5664] ">Visitor - <span className="font-normal" >{data?.visitor} /y</span> </p>
        
        </div>
        </div>
        <p 
        data-aos="zoom-in-up"
        data-aos-delay="1600 "
        data-aos-duration="1600"
        className="text-[#4b5664] text-sm  ">
       {data?.description.slice(0,90)}...
        </p>

       
        
        <div className="mt-5 ">
          <Link 
          data-aos="zoom-in"
          data-aos-delay="2000 "
          data-aos-duration="2000"
            to={`/cardDetails/${data?._id}`}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden  border border-[#fcb040] font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#fcb040] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black    transition-colors duration-300 ease-in-out group-hover:text-white">
            View Details
            </span>
          </Link>
        </div>
      </div>
    </>
               
            
            </SwiperSlide>)
        }
        
        {/* <SwiperSlide> <div>
            
               hello
            </div> </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

      
    </>
  );
}