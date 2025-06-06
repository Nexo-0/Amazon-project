import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Brand */}

          <a className="navbar-brand" href="#">Amazon</a>

          {/* Links */}
        <div>
          <ul className="navbar-nav flex-row">
          <li>  <Link className='nav-link' to="/">Home</Link></li>
          <li>  <Link className='nav-link' to="#">Signin</Link></li>
          <li>  <Link className='nav-link' to="#">Login</Link></li>
          </ul>
        </div>
          {/* Search  */}
          <div>
          <form className="d-flex mx-3 flex-grow-1" style={{ maxWidth: "500px" }}>
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
          {/* Cart */}
          <a href="#" className="btn btn-outline-warning">
            Cart
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
