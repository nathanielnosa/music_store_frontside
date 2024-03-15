const Register = () => {
  return (
    <section id="register">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
                <p className="lead">Welcome! it will only take a minute</p>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="fname" className="form-control" placeholder="First name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="lname" className="form-control" placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="uname" className="form-control" placeholder="Username" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="password" name="pwd" className="form-control" placeholder="Password" />
                      </div>
                      <div className="col-md-6">
                        <input type="password" name="cpwd" className="form-control" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>
                  <small className=" my-2">
                    By creating an account i concent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong>
                  </small>
                  <div className="d-grid">
                    <button className="btn btn-info">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register