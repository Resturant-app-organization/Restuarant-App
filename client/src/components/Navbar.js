import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ customer, setCustomer }) {
  function handleLogoutClick() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCustomer(null);
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
          <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link
                className="nav-link d-flex justify-content-center"
                to="/foodlist"
                style={{ color: "purple" }}
              > Foodlist</Link>
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


            <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button> */}

          </ul>
        </div>
      </div>
    </nav>
  )
}
