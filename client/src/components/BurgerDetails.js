import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";


export default function BurgerDetails(){

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [unit_price, setUnitPrice] = useState("")

    let {burgerId} = useParams()
  

    const ViewBurger = () => {
        fetch(`http://localhost:8000/burgers/${burgerId}`)
         .then((response) => response.json())
            .then((burgers) => { console.log(burgers)

               setImage(burgers.image_url)
               setTitle(burgers.name)
                setUnitPrice(burgers.price)
               
      
            })
    }

    useEffect(
        ViewBurger, [burgerId]
    )

    
 return(
        <div className="container">
            <center>
                <img src={image} style={{height: 200 + 'px', width: 300 + 'px'}} alt={title} />
                <h4>Burger Name:{title}</h4>
                <h5>BUrger Price:{unit_price}</h5>
                <Review />
            </center> 
        </div>
    )

}