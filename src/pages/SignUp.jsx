import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
    const [nameError,setNameError]= useState("");

    const navigate = useNavigate();

    const handleRegister=(e)=>{

          e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("Name should be more then 5 character");
            return;

        }
        else{
            setNameError("");
        }
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({name,email,photo,password});
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            updateUser({displayName:name, photoURL: photo})
            .then(()=>{
            setUser({...user, displayName: name, photoURL: photo});
             navigate("/");
            })
            .catch((error) => {
        console.log(error);
        setUser(user);
       
        });
           
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
    return (
         <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg: mx-auto ">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-xl font-bold">Signup Your Account!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" required />

          {nameError && <p className="text-sm text-error">{nameError}</p>}

           <label className="label">Email</label>
          <input name="email" type="text" className="input" placeholder="Email" required />

           <label className="label">Photo-URL</label>
          <input name="photo" type="text" className="input" placeholder="Photo" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />

          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;