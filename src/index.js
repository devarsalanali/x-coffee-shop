import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import App from './App'
import { Home } from './pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      //   {
      //     path: '/auction/:id',
      //     element: <AuctionDetails />,
      //   },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
