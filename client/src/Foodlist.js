import React from 'react';
import { Link } from "react-router-dom";

export default function BurgerCard({burgerThumbnail, burgerName, id}){
    return(
        <div className="col m-2">
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src={burgerThumbnail} className="card-img-top" alt={burgerName}
            />
            <div className='card-body'>
            <h5 className="card-title" >{burgerName}</h5>
                <Link to={"/burger/"+id} className="btn btn-info">Burger Description</Link>
            </div>
        </div>
        </div>
         
    )
}








// import React, { useEffect, useState }  from "react";

// export default function Foodlist(){

//     const [burgers, setBurgers] = useState([])

//     useEffect(() => {
//         fetch("http://localhost:5000/burgers")
//         .then(response => response.json())
//         .then((burgers) => {
//             setBurgers(burgers)
//         })
//       }, [])

//     return(
//         <div className="col m-2">
//             <div className='card' style={{width : 25 + 'rem'}} > 
//             <h2>Burger list</h2>
//             {
//                 burgers.map((burger) =>
//                 <ol key = {burger.id}>
//                   <img src={burger.image_url} className="card-img-top" alt={burger.name}/>
//                   <div className="card-body">
//                   <h3>{burger.name}</h3>
//                   <div className="btn btn-info">Burger Description</div>
//                   </div>
//                 </ol>
//                 )
//             }
//         </div>
//         </div>
//     )
// }