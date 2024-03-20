import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App