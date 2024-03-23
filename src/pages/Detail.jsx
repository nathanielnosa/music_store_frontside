import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
const Detail = () => {

  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProduct = async () => {
      try {
        const detail = await fetch(`${import.meta.env.VITE_SERVER_URL}/product/${id}`)
        const result = await detail.json()
        setProduct(result)
      } catch (error) {
        toast.error(error.message)
      }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === 'dcr') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity }))
  }

  return (
    <section id="detailed">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={product.image} alt="" className='img-fluid' />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4>
              <small>Title:</small> <br />
              {product.title}
            </h4>
            <p className="lead">
              <h4><small>Description:</small></h4>
              {product.description}
            </p>
            <p className="lead">
              <h4><small>Artist:</small></h4>
              {product.artist}
            </p>
            <h4>
              <small>Price:</small>
              <h3 className="display-4">&#8358;{product.price}</h3>
            </h4>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <FaMinusCircle onClick={() => handleQuantity('dcr')} />
                <strong className='border p-2'>{quantity}</strong>
                <FaPlusCircle onClick={() => handleQuantity('inc')} />
              </div>
              <button onClick={handleAddToCart} className="btn btn-dark">Add to cart</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Detail