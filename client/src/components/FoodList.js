import React  from "react";
import BurgerCard from './BurgerCard' 


function FoodList({burgerList,setBurgerList}) {

  let burgers = burgerList?.map((burger) => ( 

    <BurgerCard
    image_url={burger.image_url}
      burgerName={burger.name}
      burgerId={burger.id}
      key={burger.id}
      setBurgerList={setBurgerList}
      burgerList={burgerList}
    />
  ))
 
  return (
   
    <div className="container">
      <div className="row">{burgers}</div>
    </div>
    
  );
}
export default FoodList;
