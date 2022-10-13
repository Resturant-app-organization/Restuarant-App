import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
              <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "purple" }}
              >
              FoodList
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/review"
                style={{ color: "purple" }}
              >
             Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
