import React from "react";

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
      <div className="text" style={{textAlign: 'center'}}>
          <h1>
            <span style={{ fontweight: "bold", color: "#EB30AB" }}>
              BOBO
              &nbsp;
            </span>
            <span style={{ fontweight: "bold", color: "#EB30AB" }}>SAVOURS</span>
          </h1>
      </div>
        <div
          // class="collapse navbar-collapse justify-content-end"
          // id="navbarSupportedContent"
        >
          <div className="create" >
          <button style={{float: 'right', marginRight: 10 + 'px'}} variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
        </div>
        </div>
      </div>
    </nav>
  )
}
