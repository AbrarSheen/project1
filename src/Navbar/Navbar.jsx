import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
   <nav
        className="navbar navbar-expand-lg navbar-dark nave"
      >
        <div className="container">
            <Link className="navbar-brand" to="home">START FRAMEWORK</Link>
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">

           
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link " to="about" >ABOUT </ Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="portfolio" >PORTFOLIO </ Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="contact" >CONTACT </ Link>
                    </li>
                </ul>
               
            </div>
        </div>
      </nav>
    </div>
  )
}
