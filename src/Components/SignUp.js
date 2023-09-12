import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
import { useState , useEffect } from "react"
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth';
import {db,auth} from '../FIrebase/firebaseConfig'
import { collection,addDoc } from "firebase/firestore";
import './signup.css';


export const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [address, setaddress] = useState("");

  const navigate = useNavigate();

  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const initialCartValue = 0;
    console.log(user);

    addDoc(collection(db,"users"),{
      username:username,email:email,phoneno:phoneno,password:password,cart:initialCartValue,
      address:address,uid:user.uid
    }).then(()=>{
      setsuccess("New user added successfully, You will be Automayically redirected to login page. ")
      setaddress('');
      setemail('');
      setusername('')
      setpassword('')
      seterror('')
      setTimeout(()=>{
        setsuccess('');
        navigate('/login');
      },4000);
    })
    // ...
  })
  .catch((error) => {
    if(error.message === 'Firebase : Error (auth/invalid-email).');
    {
      seterror('Please fill all required fields')
    }
    if(error.message === 'Firebase: Error (auth/email-already-in-use).')
    {
      seterror('User already exists');
    }
  });
  }


  return (
    <> 
    <Navbar/>
    <div className="container">
      <br></br>
      <br></br>
      <h1>Signup</h1>
      <hr></hr>
  <form className="form-group" onSubmit={handleSubmit}>
    {success && <>
    <div className="success">
      {success} 
      </div></>}
    {error && <>
    <div className="error">
      {error}  
      </div></>}
  <label>Name</label>
    <input onChange={(e)=>setusername(e.target.value)} type="text" className="form-control" id="name" placeholder="Name"/>
    <label>Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    <br></br>
    <label>Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password"/>
    <label>Address</label>
    <input onChange={(e)=>setaddress(e.target.value)} type="text" className="form-control" id="address" placeholder="Address"/>
    <label>Phone Number</label>
    <input onChange={(e)=>setphoneno(e.target.value)} type="number" className="form-control" id="phoneno" placeholder="Phone Number"/>
    <br></br>
    <div className="btn-box">
      <span>Already Have An Account,Login 
        <Link to="/login">Here</Link>
        </span>
      </div>
      <br></br>
      <div>
      <button type="submit" className="btn btn-success btn-md">Submit</button>
    </div>
    </form>
    </div>
    </>   
  )
}