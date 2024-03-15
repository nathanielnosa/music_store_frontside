import { Link, useLocation } from "react-router-dom"
import { DASHBOARD_TOP_LINKS } from "../lib/constants"
import { FaShoppingBag, FaUser } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  return (
    <section id="navbar">
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Maudib</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              {
                DASHBOARD_TOP_LINKS.map(({ key, label, path }) => (
                  <li className="nav-item px-3" key={key}>
                    <Link to={path} className={location.pathname === path ? "nav-link active" : "nav-link"}>{label}</Link>
                  </li>
                ))
              }

            </ul>
            <form className="d-flex my-2 my-lg-0 me-3">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                style={
                  { border: "none", background: "transparent" }
                }
              />
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="d-flex gap-4 my-2 cursor-pointer">
              <Link className="text-dark" to={'login'}><FaUser size={23} style={{ color: 'var(--main-color)' }} /></Link>
              <FaShoppingBag size={23} style={{ color: 'var(--main-color)' }} />
            </div>
          </div>
        </div>
      </nav>

    </section>
  )
}

export default Navbar