import slide1 from '../assets/sliders/mslide1.png'
import slide2 from '../assets/sliders/mslide2.png'
const Slider = () => {
  return (
    <section id="slider" style={{ background: "#83716A", height: '95vh' }}>
      <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 text-start">
                <img src={slide1} alt="Los Angeles" className="img-fluid" style={{ height: "95vh", width: "70vw" }} />
                <div className="carousel-caption text-white d-md-none d-block">
                  <h4>Music Premium</h4>
                  <h2 className="display-3">PUT THE WOLD <br /> ON MUTE</h2>
                  <p className="lead d-flex gap-5 my-3">
                    <strong>Premium <br />sound</strong>
                    <strong>Quality <br />audio</strong>
                    <strong>Free <br />music</strong>
                  </p>
                  <p className='lead'>discover our unlimited music library</p>
                  <button className="btn btn-lg btn-outline-dark">Listen now</button>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block ">
                <div className="carousel caption text-white">
                  <h4>Music Premium</h4>
                  <h2 className="display-3">PUT THE WOLD <br /> ON MUTE</h2>
                  <p className="lead d-flex gap-5 my-3">
                    <strong>Premium <br />sound</strong>
                    <strong>Quality <br />audio</strong>
                    <strong>Free <br />music</strong>
                  </p>
                  <p className='lead'>discover our unlimited music library</p>
                  <button className="btn btn-lg btn-outline-dark">Listen now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 text-start">
                <img src={slide2} alt="Los Angeles" className="img-fluid" style={{ height: "95vh", width: "70vw" }} />
                <div className="carousel-caption text-white d-md-none d-block">
                  <h4>Music Premium</h4>
                  <h2 className="display-3">LIKE NOTHING <br />YOU&#39;VE HEARD <br /> BEFORE</h2>

                  <p className='lead'>discover our unlimited music library</p>
                  <button className="btn btn-lg btn-outline-dark">Listen now</button>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div className="carousel caption text-white">
                  <h4>Music Premium</h4>
                  <h2 className="display-3">LIKE NOTHING <br />YOU&#39;VE HEARD <br /> BEFORE</h2>

                  <p className='lead'>discover our unlimited music library</p>
                  <button className="btn btn-lg btn-outline-dark">Listen now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  )
}

export default Slider