import React, { useEffect, useState } from 'react';
import BurgerCard from './Foodlist';

export default function Burgers(){
    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/burgers")
        .then(response => response.json())
        .then((burgers) => {
            setBurgers(burgers)
        })
      }, [])

   

      let myBurgers = burgers.map((burger) => (<BurgerCard
        burgerName={burger.name} 
        burgerThumbnail={burger.image_url} 
        id={burger.id}
        key={burger.id} />))

    return(
      <div className="text-bg-info p-3">
        <div className='container'>My Burgers
          <div className='row'>
            {myBurgers}
          </div>
        </div>
        </div>
    )
}