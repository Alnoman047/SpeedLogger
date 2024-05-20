import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-[#F5F7FB] font-poppins'>
    <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
  </div>
)
