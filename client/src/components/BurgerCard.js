import React from "react";
import { Link } from "react-router-dom";


function BurgerCard({burgerId, image_url, burgerName}) {

  return (
    <div className="col">
      <div className="card h-100 create" style={{ width: 18 + "rem" }}>
        <img src={image_url} style={{ height: 200 + 'px', width: 286 + 'px' }} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{burgerName}</h5>
          
          <Link to={"/burgers/" + burgerId} className="btn btn-primary">
            Burger Details
          </Link>
        </div>
      </div>
     
    </div>
  );
}
export default BurgerCard;
