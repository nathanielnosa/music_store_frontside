import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)
  return (
    <section id="cart">
      <div className="container py-4">
        <div className="text-center py-3"><h3>My Cart</h3></div>
        {!cart
          ? (<div className="text-center bg-danger text-white py-5 display-6 border">
            You dont have any cart items
          </div>)
          :
          (<div className="row">
            <div className="col-md-9">
              <table className="table table-responsive table-black">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    cart.products.map((product) => (
                      <tr key={product._id}>
                        <td>{product.title}</td>
                        <td><img src={product.image} width={80} alt="" className="img-thumbnail" /></td>
                        <td><strong>{product.price.toLocaleString()}</strong></td>
                        <td >
                          <FaMinusCircle />
                          <span className="px-2">{product.quantity}</span>
                          <FaPlusCircle />
                        </td>
                        <td><strong>{(product.price * product.quantity).toLocaleString()}</strong></td>
                      </tr>
                    ))
                  }

                  <tr className="">
                    <td colSpan={4}>
                      <Link className="btn btn-dark " to={'/musics'}>Continue Shopping</Link>
                    </td>

                    <td colSpan={3}>
                      <strong>Total:</strong><h3>&#8358;{cart.total.toLocaleString()}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header display-6">Summary</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between">
                      <strong className="h6">Subtotal</strong> <b>&#8358;{cart.total.toLocaleString()}</b>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong className="h6">Estimated shipping</strong> <b>150</b>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong className="h6">Shipping discount</strong> <b>10</b>
                    </li>
                    <li className="d-flex justify-content-between">
                      <strong className="h4">Total</strong> <b>&#8358;{cart.total.toLocaleString()}</b>
                    </li>
                    <li className="d-grid">
                      <a href="" className="btn btn-dark">Checkout Now</a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>)
        }
      </div>
    </section>
  )
}

export default Cart