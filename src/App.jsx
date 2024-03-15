import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App