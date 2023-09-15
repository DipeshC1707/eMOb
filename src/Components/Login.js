import React from "react"
import { Navbar } from "./Navbar"
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './Login.css'

export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    setloading(true);
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      setsuccess('Logged in Successfully, You Will be redirected to Homepage.')
      setemail('');
      setpassword('');
      seterror('');
      setloading(true);
      setTimeout(() => {
        setsuccess('');
        navigate('/');
        setloading(false);
      }, 3000);
    })
    .catch((e)=>{
      if(e.message === 'Firebase: Error (auth/invalid-email).'){
        seterror("Please enter all required fields")
        setTimeout(() => {
        seterror('');
        setloading(false);
      }, 3000);
      }
      
      if(e.message === 'Firebase: Error (auth/user-not-found).'){
        seterror('Email Not Found');
        setTimeout(() => {
          seterror('');
          setloading(false);
        }, 3000);
      }
      
      if(e.message === 'Firebase: Error (auth/wrong-password).'){
        seterror("Wrong Password");
        setTimeout(() => {    
          seterror("");
          setloading(false);
        }, 3000);

      }
    })

  }

  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <br></br>
      <div className="container">
        <br></br>
        <br></br>
        <h1>Login</h1>
        <hr></hr>
        <form className="form-group">
        {success && <>
            <div className="success">
              {success}
            </div></>}
          {error && <>
            <div className="error">
              {error}
            </div></>}
          <label><strong>Email address</strong></label>
          <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
          <br></br>
        </form>
        <div className="form-group">
          <label><b>Password</b></label>
          <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter Password" />
        </div>
        <div className="btn-box">
          <span>Don't Have An Account?Signup&nbsp;
            <Link to="/signup">Here.</Link>
          </span>
        </div>
        <br></br>
        <button onClick={handleLogin} type="submit" className="btn btn-success">Submit</button>
      
      </div>{
        loading ? (<svg className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>) : <div></div>}
    </>

  )
}