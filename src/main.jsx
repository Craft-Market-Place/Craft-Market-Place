import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {router} from './router'
import { RouterProvider } from 'react-router-dom'
import DataProvider from './components/Context/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <DataProvider> 
    <RouterProvider router={router}/>
   </DataProvider> 
  </React.StrictMode>,
)
