import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/ContextProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AddTouristSpot() {
  const { user,theme  } = useContext(AuthContext);
  const { displayName, email } = user || {};

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
    const email = form.email.value;
    const name = form.name.value;

    const touristSpot = {
      photo,
      spot,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      visitor,
      email,
      name,
    };

    axios.post("https://tourism-server-side-blush.vercel.app/touristSpot",touristSpot)
    .then(res => {
        const data = res.data;
        if(data.insertedId){
            toast.success(' Data added smoothly!')
             form.reset();
        }
    })
    .catch((err)=>{
        toast.error("Data upload paused. Retry with stable connection.")
        console.log(err);
    })
    
    
  };

  return (
    <>
    <Toaster/>
      <Helmet>
        <title>TipTrove | AddTouristSpot</title>
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
                <span className={`${theme =="light" ?'text-[#4b5664]':'text-white' }`}>Add</span> tourists{" "}
                <span>spot</span>{" "}
              </p>
              <p className={`text-xs  ${theme =="light"?'text-[#4b5664]':'text-[#d4cccc]'} `}>
                Share the Magic! Contribute to our growing collection of dream
                destinations. Inspire fellow travelers with your favorite spots
                and hidden gems.
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
                  placeholder="Tourist spot name "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country" className="block text-sm">
                  Country name
                </label>
                <input
                  required
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country name "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                />
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
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="cost" className="block text-sm">
                  Average cost
                </label>
                <input
                  required
                  type="text"
                  name="cost"
                  id="cost"
                  placeholder="cost"
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
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="visitor" className="block text-sm">
                  Total visitors per year
                </label>
                <input
                  required
                  type="text"
                  name="visitor"
                  id="visitor"
                  placeholder="Total visitor"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-lg text-[#fcb040] ">
                <span className={`${theme =="light" ?'text-[#4b5664]':'text-white' }`}>Per</span>sonal information{" "}
              </p>
              <p className={`text-xs  ${theme =="light" ?'text-[#4b5664]':'text-[#d4cccc]' } `}>
                {" "}
                Make Your Mark! Complete your traveler profile with essential
                details. Help us tailor recommendations and connect you with
                like-minded adventurers.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="block text-sm">
                  User Email
                </label>
                <input
                  readOnly
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@gmail.com"
                  defaultValue={email}
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-[#fcb040]"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="block text-sm">
                  User Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  defaultValue={displayName}
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
                      Submit
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
