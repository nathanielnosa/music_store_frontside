import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import image from '../assets/sliders/mslide1.png'
const Detail = () => {
  return (
    <section id="detailed">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={image} alt="" className='img-fluid' />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4>
              <small>Title:</small> <br />
              Hello Product
            </h4>
            <p className="lead">
              <h4><small>Description:</small></h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, fugiat modi voluptate maiores aperiam consequatur corporis repellat maxime at sed laudantium error dolor, natus unde eius vero veniam consequuntur vitae.
            </p>
            <h4>
              <small>Price:</small>
              <h3 className="display-4">412</h3>
            </h4>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <FaMinusCircle />
                <strong className='border p-2'>1</strong>
                <FaPlusCircle />
              </div>
              <button className="btn btn-dark">Add to cart</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Detail