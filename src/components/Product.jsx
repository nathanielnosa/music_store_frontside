import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  const { _id, image, title, price, desc } = product
  return (
    <section id="productEdit">
      <div className="card border-0">
        <Link className="text-dark text-decoration-none">
          <div className="card-img">
            <img src={image} alt={title} className="img-fluid w-100 h-75" />
          </div>
          <h3 className="text-capitalize">{title}</h3>
          <p className="lead">{desc}</p>
          <h5>&#8358; {price}</h5>
        </Link>
        <div className="d-flex justify-content-evenly bg-dark p-2">
          <Link className="text-dark border rounded-circle p-2 bg-white"><FaShoppingCart size={20} /></Link>
          <Link to={`/detail/${_id}`} className="text-dark border rounded-circle p-2 bg-white"><FaSearch size={20} /></Link>
          <Link className="text-dark border rounded-circle p-2 bg-white"><FaHeart size={20} /></Link>
        </div>
      </div>
    </section >
  )
}

export default Product