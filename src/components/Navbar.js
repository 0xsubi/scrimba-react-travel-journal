import React from "react"
import globeIcon from "../images/globe.svg"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--globe" src= {globeIcon} />
            <p>my travel journal.</p>
        </nav>
    )
}

export default Navbar