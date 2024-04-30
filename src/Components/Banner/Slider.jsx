import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
import "./styles.css";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Slider() {
  return (
    <>
      <Swiper
        navigation={{
          clickable: true,
          // nextEl:'swiper-button-next',
          // prevEl:'swiper-button-prev'
          // bulletClass:'swiper-pagination-bullet'
        }}
        pagination={{
          clickable: true,
          bulletClass:"swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className=" w-full"
      >
        <SwiperSlide className="">
          <div className=" slide slide1  h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/25   h-full flex items-center justify-center ">
              <div className="text-white space-y-4">
                <h1 className=" text-3xl  md:text-5xl font-bold text-white text-center">
                  Discover{" "}
                  <span className="text-[#fcb040]"> Bali's Beauty!</span>
                </h1>
                <p className=" text-base md:text-lg font-bold text-white/85 max-w-screen-md text-center px-2 ">
                  Unwind in Bali's tropical paradise. From pristine beaches to
                  lush rice terraces, immerse yourself in the vibrant culture of
                  Indonesia's most beloved island.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2   h-[100vh] md:h-[94vh]        ">
            <div className="w-full bg-black/25   h-full flex items-center justify-center ">
            <div className="text-white space-y-4">
                <h1 className=" text-3xl md:text-5xl font-bold text-white text-center">
                Escape 
                  <span className="text-[#fcb040]"> to Langkawi!</span>
                </h1>
                <p className=" text-base md:text-lg font-bold text-white/85 max-w-screen-md text-center">
                Experience the serenity of Langkawi's island life. With stunning beaches and lush rainforests, Langkawi offers a tranquil retreat in Malaysia's natural beauty.   
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3    h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/25   h-full flex items-center justify-center ">
            <div className="text-white space-y-4">
                <h1 className=" text-3xl md:text-5xl font-bold text-white text-center">
                Explore 
                  <span className="text-[#fcb040]"> Yogyakarta Beauty!</span>
                </h1>
                <p className=" text-base md:text-lg font-bold text-white/85 max-w-screen-md text-center">
                Discover the cultural heart of Java in Yogyakarta. From ancient temples to traditional arts, Yogyakarta captivates with its rich heritage and vibrant spirit.   
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
