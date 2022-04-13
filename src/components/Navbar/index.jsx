import React from "react"
import { NavLink } from "react-router-dom"
import { HOME_ROUTER, ABOUT } from "../../Constants/Routes"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink to={HOME_ROUTER} className="navbar-container__link">
        Home
      </NavLink>
      <NavLink to={ABOUT} className="navbar-container__link">
        About
      </NavLink>
    </nav>
  )
}

export default Navbar
