import { FaCcMastercard, FaCcVisa, FaCreditCard, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile, FaPaypal, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section id="footer" className="bg-light py-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <Link className="text-dark text-decoration-none"><div className="display-5">Maudib</div></Link>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptates corrupti voluptate facere odit, reprehenderit blanditiis similique velit sequi repudiandae!</p>
            <div className="d-flex gap-4">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
              <FaLinkedin size={25} />
              <FaTwitter size={25} />
            </div>
          </div>
          <div className="col-md-3">
            <h4>Our Links</h4>
            <ul className="list-group">
              <li className="list-group-item bg-light border-0">Home</li>
              <li className="list-group-item bg-light border-0">Music</li>
              <li className="list-group-item bg-light border-0">Collections</li>
              <li className="list-group-item bg-light border-0">About</li>
              <li className="list-group-item bg-light border-0">About</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Collections</h4>
            <ul className="list-group">
              <li className="list-group-item bg-light border-0">Jazz</li>
              <li className="list-group-item bg-light border-0">Funk</li>
              <li className="list-group-item bg-light border-0">Blues</li>
              <li className="list-group-item bg-light border-0">Beat</li>
              <li className="list-group-item bg-light border-0">HipHop</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact</h4>
            <ul className="list-group">
              <li className="list-group-item bg-light border-0"><FaLocationArrow /> Lorem ipsum dolor sit Lorem, ipsum.</li>
              <li className="list-group-item bg-light border-0"><FaWhatsapp /> 08177507780</li>
              <li className="list-group-item bg-light border-0"><FaMobile /> 08177507780</li>
              <li className="list-group-item bg-light border-0"><FaEnvelope /> proncode@gmail.com</li>
            </ul>
            <div className="d-flex gap-3 mt-4">
              <FaPaypal size={35} />
              <FaCreditCard size={35} />
              <FaCcVisa size={35} />
              <FaCcMastercard size={35} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer