import { useContext } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/ContextProvider";
import { useLoaderData } from "react-router-dom/dist";

export default function UpdateTouristSpot() {
  const { theme } = useContext(AuthContext);

  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitor = form.visitor.value;

    const updateTouristSpot = {
      photo,
      spot,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      visitor,
    };

    axios
      .put(
        `https://tourism-server-side-blush.vercel.app/touristSpot/${data?._id}`,
        updateTouristSpot
      )
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          toast.success(" Data updated smoothly!");
          //   form.reset();
        }
        // console.log(res);
      })
      .catch(() => {
        toast.error(
          "Data update failed. Please check your connection and try again."
        );
      });
  };
  return (
    <>
      <Toaster />
      <Helmet>
        <title>TipTrove | UpdateTouristSpot</title>
      </Helmet>
      <div className="text-transparent">*</div>

      <section className="p-6  my-14">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-4 "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-lg text-[#fcb040] ">
                <span
                  className={`${
                    theme == "light" ? "text-[#4b5664]" : "text-white"
                  }`}
                >
                  Update
                </span>{" "}
                tourists <span>spot</span>{" "}
              </p>
              <p
                className={`text-xs  ${
                  theme == "light" ? "text-[#4b5664]" : "text-[#d4cccc]"
                } `}
              >
                Enhance Your Tourist Spot: Update key details effortlessly!
                Refine visuals, names, and descriptions to captivate visitors.
                Adjust costs, highlight seasons, estimate travel time, and
                project annual visitors for an irresistible experience.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photo" className="block text-sm    ">
                  photo URL
                </label>
                <input
                  required
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo URL"
                  defaultValue={data?.photo}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="spot" className="block text-sm">
                  Tourist spot name
                </label>
                <input
                  required
                  type="text"
                  name="spot"
                  id="spot"
                  defaultValue={data?.spot}
                  placeholder="Tourist spot name "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country" className="block text-sm">
                  Country name
                </label>

                <select
                  required
                  id="country"
                  name="country"
                  defaultValue={data?.country}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="location" className="block text-sm">
                  Location
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location "
                  defaultValue={data?.location}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="cost" className="block text-sm">
                  Average cost
                </label>
                <input
                  required
                  type="number"
                  name="cost"
                  id="cost"
                  placeholder="cost"
                  defaultValue={data?.cost}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="seasonality" className="block text-sm">
                  Season
                </label>
                <input
                  required
                  type="text"
                  name="seasonality"
                  id="seasonality"
                  placeholder="seasonality"
                  defaultValue={data?.seasonality}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="time" className="block text-sm">
                  Travel time
                </label>
                <input
                  required
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Travel time"
                  defaultValue={data?.time}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-2  ">
                <label htmlFor="visitor" className="block text-sm">
                  Total visitors per year
                </label>
                <input
                  required
                  type="text"
                  name="visitor"
                  id="visitor"
                  placeholder="Total visitor"
                  defaultValue={data?.visitor}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full ">
                <label htmlFor="description" className="block text-sm">
                  Short description
                </label>
                <textarea
                  required
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description "
                  defaultValue={data?.description}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full md:col-span-2 lg:col-span-1 mt-5    ">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="relative w-full px-5 py-3 overflow-hidden font-bold   border border-gray-200 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#fcb040] group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#fcb040]  group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#fcb040]  group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#fcb040]  group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#fcb040]  opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Update
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
