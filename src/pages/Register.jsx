import { useState } from "react"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    cPwd: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch(`${import.meta.env.VITE_SERVER_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await fetchData.json()
      toast.success(result.message)
      setData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        cPwd: ""
      });
      if (result.alert) {
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

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
                <form onSubmit={handleSubmit}>
                  <div className="form-group my-2">
                    <div className="row gy-2">
                      <div className="col-md-6">
                        <input type="text" name="firstname" value={data.firstname} onChange={handleChange} className="form-control" placeholder="First name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="lastname" value={data.lastname} onChange={handleChange} className="form-control" placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <div className="row gy-2">
                      <div className="col-md-6">
                        <input type="text" name="username" value={data.username} onChange={handleChange} className="form-control" placeholder="Username" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" value={data.email} onChange={handleChange} className="form-control" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <div className="row gy-2">
                      <div className="col-md-6">
                        <input type="password" name="password" value={data.password} onChange={handleChange} className="form-control" placeholder="Password" />
                      </div>
                      <div className="col-md-6">
                        <input type="password" name="cPwd" value={data.cPwd} onChange={handleChange} className="form-control" placeholder="Confirm Password" />
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