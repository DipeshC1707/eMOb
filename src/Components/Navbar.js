import React,{useEffect,useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import cartlogo from "../Components/assets/logo/cartIcon.png"
import profilelogo from "../Components/assets/logo/icons8-name-50.png"
import "./Navbar.css"
import appLogo from "../Components/assets/logo/eMOB (3).png"
import {auth,db} from '../FIrebase/firebaseConfig'
import { query ,getDocs,where,collection } from "firebase/firestore";

export const Navbar = () => {
  function GetCurrentUser(){
    const [user, setuser] = useState("");
    const userCollection = collection(db,'users');
    useEffect(() => {
      auth.onAuthStateChanged(userlogged=>{
        if(userlogged){
          const getUsers = async()=>{
            const q = query(collection(db,"users"),where("uid","==",userlogged.uid));

            const data = await getDocs(q)
            setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
          }
          getUsers();
        }
        else{
          setuser(null);
        }
      })
    }, [])
    return user;
  }

  const navigate = useNavigate();

  const handleLogout = () =>{
    auth.signOut().then(()=>{
      navigate('/login');
    })
  }
  const loggedUser = GetCurrentUser();
  return (
    <>
    <div className="navbar">
      <div className="LeftContainer">
        <img src={appLogo}/>
      </div>
      <div className="RightContainer">
        {!loggedUser && <nav>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
          </nav>}
          {loggedUser && 
          <nav>
            <Link to="/"><button>Home</button></Link>
            <div className="cart-btn">
            <img src={cartlogo}/>
            <span class className='cart-icon-css'>{loggedUser[0].cart}</span>
          </div>
          <Link to="/profile">
            <img src={profilelogo} className="profile-icon"/>
          </Link>
          <button className="logout" onClick={handleLogout}>Log Out</button>
            </nav>}
      </div>
    </div>
    </>
  )
}