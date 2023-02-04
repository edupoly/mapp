import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-primary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar