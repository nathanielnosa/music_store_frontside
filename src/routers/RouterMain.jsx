import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import '../index.css'
import Music from "../pages/Music"
import About from "../pages/About"

const RouterMain = () => {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/musics" element={<Music />} />
        <Route path="/about" element={<About />} />
      </Route>
    )

  )
  return (
    <RouterProvider router={routers} />
  )
}

export default RouterMain