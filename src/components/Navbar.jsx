import React from 'react'

const Navbar = ({ brand }) => {
  return (
    <nav className="navabar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">{brand}</a>
      </div>
    </nav>


)
}

export default Navbar