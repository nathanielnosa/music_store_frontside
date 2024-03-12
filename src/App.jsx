import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App