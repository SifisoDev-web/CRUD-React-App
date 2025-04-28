import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg box-shadow border-bottom   pt-4">
        <div className="container ">
          <Link className="navbar-brand logo" to="/">SifisoDev</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer   className="footer bg-secondary text-white border-top py-4">
      <div className="container text-center">
        <h5 className="footer-title mb-3">Footer</h5>
        <p className="footer-text">
          Made with love ❤️ by <strong>SifisoDev</strong>
        </p>
        <small className="text-muted">© 2025 All Rights Reserved</small>
      </div>
    </footer>
    
    </>
  );
}
