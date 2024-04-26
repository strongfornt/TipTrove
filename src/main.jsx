import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom/dist/index.js'
import { router } from './Router/Router.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import ContextProvider from './AuthProvider/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
   <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
   </ContextProvider>
  </React.StrictMode>,
)
