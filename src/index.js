import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import App from './App'
import { CreateNft } from './pages/CreateNft'
import { ExploreNfts } from './pages/ExploreNfts'
import { Home } from './pages/Home'
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
      {
        path: '/create',
        element: <CreateNft />,
      },
      {
        path: '/explore',
        element: <ExploreNfts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
