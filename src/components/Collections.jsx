import { Link } from "react-router-dom"
import { collections } from "../lib/data"

const Collections = () => {
  return (
    <section id="collections">
      <div className="container-fluid py-3">
        <div className="row">
          {
            collections.map((items) => (
              <div key={items.id} className="col-md-3" >
                <Link className="text-dark text-decoration-none">
                  <div className="card border-0">
                    <div className="card-img">
                      <img src={items.img} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="card-img-overlay justify-content-center flex flex-row align-items-center">
                      <h3 className="text-white">{items.title}</h3>
                      <button className="btn btn-dark">Listen Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Collections