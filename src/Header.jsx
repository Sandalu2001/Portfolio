import React from "react";
import NavItem from "./NavItem.jsx";


function Header(){
    return(
      <nav className="navbar navbar-expand-lg">
        
        <a className="navbar-brand"  href="#title">Hello</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo">
            <ul className="navbar-nav ms-auto">
                <NavItem name = "Home" href = "#title"/>
                <NavItem name = "Education" href = "#education"/>
                <NavItem name = "Projects" href = "#projects"/>
                <a href="#contact" className="btn btn-outline-dark">Let's talk</a>
            </ul>
          </div>
        
      </nav>
    )
}


export default Header;