import React from "react";

export default function Foodlist({burgerTitle, burgerUrl, id}){

    return(
        <div>
            <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={burgerUrl} className="card-img-top" alt={burgerTitle}
            />
            <div className='card-body'>
            <h5 className="card-title" >{burgerTitle}</h5>
                {/* <Link to={"/game/"+ id} className="btn btn-info">Game Description</Link> */}
            </div>
        </div>
        </div>
    )
}