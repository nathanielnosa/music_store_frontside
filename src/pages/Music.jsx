import { Link } from "react-router-dom"
import Products from "../components/Products"

const Music = () => {
  return (
    <section id="music">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-light py-2 my-3 px-3">
              <p className="lead">
                <Link to={"/"} className="text-decoration-none text-dark">Home</Link>/Music
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="filter-music d-flex align-items-center">
            Filter Music:
            <form action="" className="mx-2">
              <select name="" id="" className="form-select">
                <option disabled selected>collection</option>
                <option value="">Beat</option>
                <option value="">Jazz</option>
                <option value="">Funk</option>
                <option value="">Blues</option>
              </select>
            </form>
          </div>
          <div className="sort-music d-flex align-items-center">
            Sort Music:
            <form action="" className="mx-2">
              <select name="" id="" className="form-select">
                <option disabled selected>--sort music--</option>
                <option value="">A-Z</option>
                <option value="">Lowest Price</option>
                <option value="">Highest Price</option>
                <option value="">Newest</option>
              </select>
            </form>
          </div>
        </div>
        <div className="container">
          <Products title="Latest Music" />
        </div>
      </div>
    </section>
  )
}

export default Music