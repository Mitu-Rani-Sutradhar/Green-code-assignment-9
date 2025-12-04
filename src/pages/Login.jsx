import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

const [error,setError] = useState("");

const {signIn} =use(AuthContext);
const location=useLocation();

const navigate = useNavigate();

console.log(location);
const handleLogIn =(e)=>{
    e.preventDefault();
    const form=e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password});
    signIn(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorCode,errorMessage);
    setError(errorCode);
  });
};

    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg: mx-auto ">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Login now!</h1>
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">


          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required />
          
          
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />
          
          {error && <p className='text-red-600 text-xr'>{error}</p>}


          <div className='flex justify-between px-3 pt-3'>
          <a className="link link-hover">Forgot password?</a>
          <a className="link link-hover text-secondary"><Link to="/auth/signup">Sign Up</Link></a>
          
          </div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;