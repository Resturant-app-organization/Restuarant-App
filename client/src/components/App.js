
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contacts from "./Contacts";
import Login from "./Login";
import Home from "./FoodList";
import BurgerDetails from "./BurgerDetails";
import Review from "./Review"
import Logout from "./Logout";
import Footer from "./Footer";

function App({ onLogin, reviews, setReviewList }) {
  const [user, setUser] = useState(null);

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
        <Route exact path="/" element={<Home burgerList={burgerList} setBurgerList={setBurgerList} />}
          ></Route>
        <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
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

