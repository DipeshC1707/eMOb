import React from "react"
import { Link } from "react-router-dom"
import cartlogo from "../Components/assets/logo/cartIcon.png"
import profilelogo from "../Components/assets/logo/icons8-name-50.png"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
    <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/signup"><button>SignUp</button></Link>
        <Link to="/login"><button>Login</button></Link>

        <Link to="/cart">
          <div className="cart-btn">
          <img src={cartlogo} alt="no img"/>
          <span className="cart-icon-css">0</span>
        </div>
        </Link>

        <Link to="/profile">
          <img src={profilelogo} alt="no img" className="profile-icon"></img>
        </Link> 
    </nav>
    </>
  )
}