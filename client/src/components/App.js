import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";
import Logout from "./Logout";
import Footer from "./Footer";

function App({ onLogin }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />
  return (
    <Router>
      <div>
        <Navbar user={user} setUser={setUser}/>
      </div>
      <div className="row mt-3">
        <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
