import { Navbar, Footer } from './components/sections'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
