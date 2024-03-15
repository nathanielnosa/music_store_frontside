import { Link } from "react-router-dom"

const Login = () => {
  return (
    <section id="register">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
                <p className="lead">Hi! welcome it&#39;s good to have you back </p>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group my-2">
                    <input type="text" name="uname" className="form-control" placeholder="Username" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="pwd" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group my-2 d-flex gap-2">
                    <input type="checkbox" name="pwd" className="form-check" placeholder="Password" />Remember me
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-info">Login</button>
                  </div>
                  <div className="form-group my-2 text-center">
                    <Link className="text-dark text-decoration-none">Forget password</Link> <br></br>
                    <Link to={'/register'} className="text-dark text-decoration-none">Don&#39;t have an account? click here</Link>
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

export default Login