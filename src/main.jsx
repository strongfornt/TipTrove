import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom/dist/index.js'
import { router } from './Router/Router.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import ContextProvider from './AuthProvider/ContextProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
   <ContextProvider>
   <HelmetProvider>
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
    </QueryClientProvider>
     </HelmetProvider>
   </ContextProvider>
  </React.StrictMode>,
)
