import { Link, useLocation } from "react-router-dom"
import Products from "../components/Products"
import { useState } from 'react'

const Music = () => {
  const location = useLocation()
  const collection = location.pathname.split("/")[2]
  const [filters, setFilter] = useState({})
  const [sorts, setSort] = useState('newest')
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter(
      {
        ...filters,
        [e.target.name]: value.toLowerCase()
      }
    )
  }
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
              <select onChange={handleFilters} name="collection" id="" className="form-select">
                <option disabled >collection</option>
                <option>Beat</option>
                <option>Jazz</option>
                <option>Funk</option>
                <option>Blues</option>
              </select>
            </form>
          </div>
          <div className="sort-music d-flex align-items-center">
            Sort Music:
            <form action="" className="mx-2">
              <select name="sort" onChange={(e) => setSort(e.target.value)} id="" className="form-select">
                <option disabled >--sort music--</option>
                <option value="newest">Newest</option>
                <option value="low">Lowest Price</option>
                <option value="high">Highest Price</option>
              </select>
            </form>
          </div>
        </div>
        <div className="container">
          <h2>{collection}</h2>
          <Products collection={collection} filters={filters} sorts={sorts} />
        </div>
      </div>
    </section>
  )
}

export default Music