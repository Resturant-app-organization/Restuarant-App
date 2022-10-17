import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import FoodList from "./FoodList";
import BurgerDetails from "./BurgerDetails";
import Review from "./Review"

import Footer from "./Footer";

function App({reviews, setReviewList}) {
  const [burgerList, setBurgerList] = useState(null);
  const [customer, setCustomer] = useState(null);

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

        <Route exact path="/" element={<FoodList onDetailsClick = {onDetailsClick}  />}
        ></Route>
        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/burgers/:burgerId" element={<BurgerDetails />}></Route>
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