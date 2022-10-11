import React from "react";
import {Link } from "react-router-dom";

export default function Foodlist({burgerTitle, burgerUrl, id}){

    return(
        <div className="col m-2">
            <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={burgerUrl} className="card-img-top" alt={burgerTitle}
            />
            <div className='card-body'>
            <h5 className="card-title" >{burgerTitle}</h5>
                <Link to={"/game/"+ id} className="btn btn-info">Burger Description</Link>
            </div>
        </div>
        </div>
    )
}