import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Email address" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="btn-group mb-3 mr-5">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            What are you looking for?
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#"> <Link to={'/recruitment'}>Recruitment</Link> </a></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
            <li><a class="dropdown-item" href="#">Suggestions for improvement</a></li>
          </ul>
        </div>
        <button type="submit" class="btn btn-info sub-btn">
          <Link to={'/submitted'} >Submit</Link>
        </button>
      </div>
    </div>
  )
}

export default Login