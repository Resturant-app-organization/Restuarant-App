import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";

import FoodList from "./FoodList";

import Home from "./FoodList";
import BurgerDetails from "./BurgerDetails";
import Review from "./Review"
// import Logout from "./Logout";

import Footer from "./Footer";
// import FoodList from "./FoodList";

function App({reviews, setReviewList}) {
  const [burgerList, setBurgerList] = useState(null);
  const [customer, setCustomer] = useState(null);
  // const [burgerList, setBurgerList] = useState([])

function onDetailsClick(clickedBurger){
    setBurgerList(clickedBurger)
  }

  useEffect(() => {
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

        <Route exact path="/" element={<FoodList burgerList={burgerList} setBurgerList={setBurgerList} />}
        ></Route>
        <Route exact path="/" element={<Home burgerList={burgerList} setBurgerList={setBurgerList} />}
          ></Route>

        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/burgers/:burgerId" element={<BurgerDetails />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          {/* <Route exact path="/logout" element={<Logout />}></Route> */}
          <Route exact path="/burgers/:burgerId" element={<BurgerDetails />}
          ></Route>
           <Route  exact  path="/review"  element={<Review reviewList={reviews} setReviewList={setReviewList} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;