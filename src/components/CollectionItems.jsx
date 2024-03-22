import { Link } from "react-router-dom"

const CollectionItems = ({ items }) => {
  const { img, title,collection } = items
  return (
    <Link className="text-dark text-decoration-none" to={`/music/${collection}/`}>
      <div className="card border-0">
        <div className="card-img">
          <img src={img} alt="" className="img-fluid w-100" />
        </div>
        <div className="card-img-overlay justify-content-center flex flex-row align-items-center">
          <h3 className="text-white">{title}</h3>
          <button className="btn btn-dark">Listen Now</button>
        </div>
      </div>
    </Link>
  )
}

export default CollectionItems