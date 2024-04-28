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
            element:<UpdateProfile/>
        },
        {
            path:'/addTouristSpot',
            element:<PrivateRoute><AddTouristSpot/></PrivateRoute>
        },
        {
            path:'/allTouristSpot',
            element:<AllTouristSpot/>,
            
        }
      ]
    },
  ]);
