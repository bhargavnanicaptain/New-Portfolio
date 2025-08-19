import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
        <style>
            {
                `
                    .linkedin{
                                color:black;
                                text-decoration:none;

                    }
                                .linkedin:hover{
                                color:blue;
                                }
                    

                `
            }
        </style>
      {/* Navbar code directly included */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><a className="linkedin"  href="https://www.linkedin.com/in/vtbhargav-tech/">V.T. BHARGAV</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li>
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routed content appears here */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
