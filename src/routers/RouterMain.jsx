import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Music from "../pages/Music";
import Collection from "../pages/Collection";
import Success from "../pages/Success";
import { Navigate } from 'react-router-dom';
import CancelPay from "../pages/CancelPay";
import { useSelector } from "react-redux"
const RouterMain = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/musics" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/music/:category" element={<Music />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/register"
            element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/cart"
            element={

              <Cart />

            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<CancelPay />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterMain;