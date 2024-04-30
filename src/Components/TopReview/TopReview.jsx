import banner from "./../../assets/photos/review.jpg";
import bg from "./../../assets/photos/reviewBanner.jpg";
import TopReviewSlider from "./TopReviewSlider";

export default function TopReview() {
  return (
    <>
      <section className=" dark:text-gray-800">
        <div className="container min-w-full flex flex-col relative justify-center  mx-auto  lg:flex-row lg:justify-between">
          <div
            className="flex items-center bg-center bg-cover justify-center absolute lg:static -z-10   w-full   lg:mt-0 h-96 xl:h-112 2xl:h-128"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="h-full w-full bg-black/35 lg:bg-black/15"></div>
          </div>
          <div
            className="flex flex-col justify-center h-96 xl:h-112 2xl:h-128     mt-16 lg:mt-0  z-10  text-center rounded-sm  bg-cover bg-center   w-full lg:text-left"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className=" h-full  bg-black/35 ">
              <div className="flex flex-col justify-center items-center  h-full">
                <h1 className="text-4xl text-center md:text-5xl font-bold leading-none text-white mb-6">
                  Our Top Reviews
                </h1>
                   <div className=" max-w-xs md:max-w-lg lg:max-w-md" >
                   <TopReviewSlider/>
                   </div>
                {/* <div className="bg-red-800 w-60" >
                <div className="flex flex-col sm:items-center sm:justify-center  lg:justify-start">
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
                  <div className="mb-3">
                    <p className="text-white text-xs text-center max-w-lg">
                      A thrilling journey into the heart of the Sundarbans, the
                      world's largest mangrove forest. Explore dense mangrove
                      forests, spot elusive Bengal tigers, and cruise along
                      winding waterways teeming with exotic wildlife. An
                      unforgettable experience for nature enthusiasts and
                      wildlife lovers.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
