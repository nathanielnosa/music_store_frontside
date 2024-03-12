import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import '../index.css'

const RouterMain = () => {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    )

  )
  return (
    <RouterProvider router={routers} />
  )
}

export default RouterMain