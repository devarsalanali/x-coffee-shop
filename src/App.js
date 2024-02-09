import { Navbar } from './components/sections/Navbar'
import { Footer } from './components/sections/Footer'
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
