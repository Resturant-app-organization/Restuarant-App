import React, { useState, useEffect } from "react";
import BurgerCard from "./BurgerCard";

function FoodList({  onDetailsClick }) {
  const [burgers, setBurgers] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const POSTS = () => {
    fetch("http://localhost:3000/burgers")
      .then((response) => response.json())
      .then((data) => {
        setBurgers(data);
      });
  };

  useEffect(POSTS, []);

  

  const burgerCards = burgers
    .filter((burger) =>
      burger.name.toLowerCase().includes(searchItem.toLowerCase())
    )
    .map((burger) => (
      <BurgerCard
        image_url={burger.image_url}
        burgerName={burger.name}
        burgerPrice={burger.price}
        onDetailsClick={onDetailsClick}
        burgerId={burger.id}
        key={burger.id}
        burger={burger}
      />
    ));


  return (
    <div className="container">
      Search Burger.
      <form >
        <div>
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </form>
      <div className="row">{burgerCards}</div>
    </div>
  );
}
export default FoodList;
