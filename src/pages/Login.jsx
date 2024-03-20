import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    password: "",
    rememberMe: ""
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const logUser = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const { message, token, alert } = await logUser.json();
      toast.success(message)
      if (token) {
        if (data.rememberMe) {
          Cookies.set('token', token, { expires: 7 });
        } else {
          Cookies.set('token', token);
        }
        // Redirect to dashboard or home page
      }
      setData({
        username: "",
        password: "",
        rememberMe: ""
      })
      if (alert) {
        navigate('/')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <section id="login">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
                <p className="lead">Hi! welcome it&#39;s good to have you back </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group my-2">
                    <input type="text" name="username" onChange={handleChange} value={data.username} className="form-control" placeholder="Username" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" onChange={handleChange} value={data.password} className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group my-2 d-flex gap-2">
                    <input type="checkbox" name="rememberMe" onChange={handleChange} checked={data.rememberMe} className="form-check" placeholder="Password" />Remember me
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