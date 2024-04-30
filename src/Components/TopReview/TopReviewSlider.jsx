import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function TopReviewSlider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Pagination, Autoplay, Keyboard]}
        className="w-full"
      >
        <SwiperSlide className="">
          <div className="flex   flex-col sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">
                Sundarbans Safari
              </h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="mb-2   flex items-center">
              <p className="text-white text-xs text-center  max-w-screen-sm ">
                Embark on an exhilarating journey into the heart of the
                Sundarbans, where dense mangrove forests harbor majestic Bengal
                tigers and a diverse array of wildlife, offering an
                unforgettable adventure in the wilderness.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Ahsan Ullah
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://lh3.googleusercontent.com/a/ACg8ocLeOiZZmyCNk0XEGrOfOTx0oEgCqrtAvyml-8dcu46b1Lkr8P0s=s96-c" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex   flex-col sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">Bangkok Culture</h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-white text-xs text-center max-w-screen-sm">
                Immerse yourself in the rich tapestry of Bangkok's cultural
                heritage as you wander through ornate temples, bustling markets,
                and vibrant streets, where the past seamlessly blends with the
                present, offering a captivating glimpse. 
                
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Halil pasha
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://i.postimg.cc/XY81wR9N/profile-Three.jpg" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col -800  sm:items-center sm:justify-center  lg:justify-start">
            <div className=" flex flex-col justify-center items-center gap-1 mb-3">
              <h1 className="text-2xl font-bold text-white">Bali Paradise</h1>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask h-5 text-base mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-white text-xs text-center max-w-screen-sm">
                Dive into the enchanting beauty of Bali, where emerald rice
                terraces, ancient temples, and pristine beaches converge to
                create a tropical paradise, offering a blend of cultural
                richness and natural splendor.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-base text-white font-semibold">
                Bali Bey
              </h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://i.postimg.cc/2y5GzyVP/profile-Two.jpg" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
