import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Error from "../PagesTwo/Error/Error";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "../PagesTwo/PrivateRoute/PrivateRoute";
import AllTouristSpot from "../Pages/AllTourisstSpot/AllTouristSpot";
import CardDetails from "../Components/TouristCard/CardDetails";
import MyList from "../Pages/MyList/MyList";
import UpdateTouristSpot from "../Pages/MyList/UpdateMyList/UpdateTouristSpot";

import CardRequestCountry from "../Components/HomeData/Country/CardRequestCountry";
import Contact from "../Pages/Contact/Contact";

   export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Home/>
            
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/updateProfile',
            element:<PrivateRoute><UpdateProfile/></PrivateRoute>
        },
        {
            path:'/addTouristSpot',
            element:<PrivateRoute><AddTouristSpot/></PrivateRoute>
        },
        {
            path:'/allTouristSpot',
            element:<AllTouristSpot/>,
            
        },{
            path:'/cardDetails/:id',
            element:<PrivateRoute><CardDetails/></PrivateRoute>,
            loader:({params}) => fetch(`https://tourism-server-side-blush.vercel.app/touristSpot/${params.id}`)
        },
        {
            path:'/myList',
            element:<PrivateRoute><MyList/></PrivateRoute>
        },
        {
            path:'/updateTouristSpot/:id',
            element:<PrivateRoute><UpdateTouristSpot/></PrivateRoute>,
            loader:({params})=> fetch(`https://tourism-server-side-blush.vercel.app/touristSpot/${params.id}`)
        },
        {
            path:'/countryCard/:country',
            element:<CardRequestCountry/>,
            loader:({params}) => fetch(`https://tourism-server-side-blush.vercel.app/country/${params.country}`)
        },
        {
            path:'/contact',
            element:<Contact/>
        }
      ]
    },
  ]);
