import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
