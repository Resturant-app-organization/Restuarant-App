import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <nav className="navbar navbar-expand-sm  navbar-expand-lg light">
      
      <div className="container-fluid">
      <div className="text">
        <center>
          <h1>
            {" "}
            <span style={{ fontweight: "bold", color: "#EB30AB" }}>
              BOBO
            </span>{" "}
            <span style={{ fontweight: "bold", color: "#EB30AB" }}>SAVOURS</span>
          </h1>
        </center>
      </div>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link
                className="nav-link d-flex justify-content-center"
                to="/login"
                style={{ color: "purple" }}
              > s</Link>
              </li>
              <li>
               
            </li>
              {/* <li>
               <Link
                className="nav-link d-flex justify-content-center"
                to="/menu"
                style={{ color: "purple" }}
              >
              Menu
              </Link> 
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/about"
                style={{ color: "purple" }}
              >
             About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/contacts"
                style={{ color: "purple" }}
              >
             Contacts
              </Link>
            </li>
            <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
