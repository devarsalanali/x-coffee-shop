import { Navbar, Footer } from './components/sections'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ zIndex: 1 }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
