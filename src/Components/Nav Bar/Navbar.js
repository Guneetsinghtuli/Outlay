import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
        <div className = "main-container--nav">
            <div className="nav-logo">
                <img src="./images/Outlay.png" alt="" className ="nav-logo--image" />
            </div>
            <div className="nav-button">
                <a href ="/#" className="nav-button--grp primary--button">Sign Up</a>
                <a href ="/#" className="nav-button--grp secondary--button">Login</a>
            </div>
        </div>
    </>
  )
}

export default Navbar
