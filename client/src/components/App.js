<<<<<<< HEAD
=======

>>>>>>> master
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";
<<<<<<< HEAD
=======
import Home from "./FoodList";
import BurgerDetails from "./BurgerDetails";
import Review from "./Review"
import Logout from "./Logout";
>>>>>>> master
import Footer from "./Footer";
import Foodlist from "./Foodlist";

<<<<<<< HEAD
function App() {
  const [customer, setCustomer] = useState(null);
=======
function App({ onLogin, reviews, setReviewList }) {
  const [user, setUser] = useState(null);
>>>>>>> master

  const [burgerList, setBurgerList] = useState([]);

  const POSTS = () => {
    fetch("http://localhost:8000/burgers")
      .then((response) => response.json())
      .then((burgers) => {
    
        setBurgerList(burgers);
      });
  };

  useEffect(POSTS, []);

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
<<<<<<< HEAD
        <Route exact path="/" element={<Foodlist />}></Route>
=======
        <Route exact path="/" element={<Home burgerList={burgerList} setBurgerList={setBurgerList} />}
          ></Route>
>>>>>>> master
        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
<<<<<<< HEAD
          
=======
          <Route exact path="/logout" element={<Logout />}></Route>
          <Route exact path="/burgers/:burgerId" element={<BurgerDetails />}
          ></Route>
           <Route  exact  path="/review"  element={<Review reviewList={reviews} setReviewList={setReviewList} />}
          ></Route>
>>>>>>> master
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;