import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Success = () => {
  const location = useLocation();
  const { paymentData } = location.state || {}; // Access paymentData from location.state

  console.log(paymentData);
  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center p-2 py-3">
              <h2>
                <FaCheckCircle size={30} color="green" />
              </h2>
              <h4>Payment Successful</h4>
              <p className="lead">Your payment was successful</p>
              <Link className="btn w-50 mx-auto btn-success">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Success