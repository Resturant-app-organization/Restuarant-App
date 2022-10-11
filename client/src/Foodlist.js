import React, { useEffect, useState }  from "react";
export default function Foodlist(){

    const [burgers, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/burgers")
        .then(response => response.json())
        .then((burgers) => {
            setGames(burgers)
        })
      }, [])

    return(
        <div className="col m-2">
            <div className='card' style={{width : 25 + 'rem'}} > 
            <h2>Burger list</h2>
            {
                burgers.map((burger) =>
                <ol key = {burger.id}>
                  <img src={burger.image_url} className="card-img-top" alt={burger.nam}/>
                  <div className="card-body">
                  <h3>{burger.name}</h3>
                  < div className="btn btn-info">Burger Description</div>
                  </div>
                </ol>
                )
            }
        </div>
        </div>
    )
}