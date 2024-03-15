import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <section id="cart">
      <div className="container">
        <div className="text-center py-3"><h3>My Cart</h3></div>
        <div className="row">
          <div className="col-md-9 mx-auto">
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
                  <td>2</td>
                  <td><strong>9876</strong></td>
                </tr>
                <tr>
                  <td>Bloody vimpires</td>
                  <td><img src="" alt="" /></td>
                  <td><strong>3445</strong></td>
                  <td>2</td>
                  <td><strong>9876</strong></td>
                </tr>
                <tr className="">
                  <td colSpan={2}>
                    <Link className="btn btn-dark " to={'/'}>Continue Shopping</Link>
                  </td>
                  <td colSpan={2}>
                    <Link className="btn btn-dark " to={'/'}>Checkout Now</Link>
                  </td>
                  <td>
                    <strong>Total:</strong><h3>148,595</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart