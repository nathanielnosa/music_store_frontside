import { FaTimesCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const CancelPay = () => {
  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center p-2 py-3">
              <h2>
                <FaTimesCircle size={30} color="red" />
              </h2>
              <h4>Payment Canceled</h4>
              <p className="lead">Your payment was canceled</p>
              <Link className="btn w-50 mx-auto btn-danger">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CancelPay