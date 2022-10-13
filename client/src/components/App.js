import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";
import Footer from "./Footer";
import Foodlist from "./Foodlist";

function App() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }, []);

  if (!customer) return <Login onLogin={setCustomer} />
  return (
    <Router>
      <div className="row mt-3">
      <Navbar customer={customer} setCustomer={setCustomer}/>
        <Routes>
        <Route exact path="/" element={<Foodlist />}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;