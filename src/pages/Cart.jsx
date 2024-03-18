import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <section id="cart">
      <div className="container py-4">
        <div className="text-center py-3"><h3>My Cart</h3></div>
        <div className="row">
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
                <tr>
                  <td>Bloody vimpires</td>
                  <td><img src="" alt="" /></td>
                  <td><strong>3445</strong></td>
                  <td >
                    <FaMinusCircle />
                    <span className="px-2">2</span>
                    <FaPlusCircle />
                  </td>
                  <td><strong>9876</strong></td>
                </tr>
                <tr>
                  <td>Bloody vimpires</td>
                  <td><img src="" alt="" /></td>
                  <td><strong>3445</strong></td>
                  <td>
                    <FaMinusCircle />
                    <span className="px-2">2</span>
                    <FaPlusCircle />
                  </td>
                  <td><strong>9876</strong></td>
                </tr>
                <tr className="">
                  <td colSpan={4}>
                    <Link className="btn btn-dark " to={'/'}>Continue Shopping</Link>
                  </td>

                  <td colSpan={3}>
                    <strong>Total:</strong><h3>148,595</h3>
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
                    <strong className="h6">Subtotal</strong> <b>148,595</b>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong className="h6">Estimated shipping</strong> <b>150</b>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong className="h6">Shipping discount</strong> <b>10</b>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong className="h4">Total</strong> <b>148,595</b>
                  </li>
                  <li className="d-grid">
                    <a href="" className="btn btn-dark">Checkout Now</a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart