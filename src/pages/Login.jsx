import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";
// import { isFetching, error } from "../redux/userRedux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false  // Default to false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.access_token;

    login(dispatch, formData, token)
      .then(() => {
        // Redirect to home page after successful login
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <section id="login">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
                <p className="lead">Hi! Welcome back. It's good to have you back.</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group my-2">
                    <input type="text" name="username" onChange={handleChange} value={formData.username} className="form-control" placeholder="Username" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" onChange={handleChange} value={formData.password} className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group my-2 d-flex gap-2">
                    <input type="checkbox" name="rememberMe" onChange={handleChange} checked={formData.rememberMe} className="form-check-input" />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  {
                    isFetching
                      ? (
                        <div className="d-grid align-items-center justify-content-center">
                          <div className="spinner-border text-info" role="status">
                            <span className="sr-only"></span>
                          </div>
                        </div>
                      )
                      : (<div className="d-grid">
                        <button className="btn btn-info">Login</button>
                      </div>)
                  }
                  {
                    error && <div className="text-danger">Something went wrong...</div>
                  }
                  <div className="form-group my-2 text-center">
                    <Link to={'/forgot-password'} className="text-dark text-decoration-none">Forgot password?</Link> <br />
                    <Link to={'/register'} className="text-dark text-decoration-none">Don't have an account? Click here</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
