import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate
} from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import '../index.css'
import Music from "../pages/Music"
import About from "../pages/About"
import Detail from "../pages/Detail"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Cart from "../pages/Cart"

const RouterMain = () => {
  const user = true
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/musics" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/music/:category" element={<Detail />} />
        <Route path="/music/:id" element={<Detail />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/cart" element={<Cart />} />

      </Route>
    )

  )
  return (
    <RouterProvider router={routers} />
  )
}

export default RouterMain