import React, {useEffect, useState} from 'react';

// import { useParams } from "react-router-dom";

const BurgerDetail = "http://localhost:5000/burgers/"

export default function BurgerDescription(){

    const[image_url, setImage_url] = useState("")
    const[name, setName] = useState("")
    const[price, setPrice] = useState("")

    // let {burgerId} = useParams()

    // const actualSearch = BurgerDetail + burgerId

    // const getBurger = () => {
    //     fetch(actualSearch)
    //         .then((res) => res.json())
    //         .then((burger) => {
               

    //             setName(burger.name)
    //             setImage_url(burger.image_url)
    //             setPrice(burger.price)
                
    //         })
    // }

    // useEffect(
    //     getBurger, []
    // )

    useEffect(() => {
        fetch(BurgerDetail)
        .then(response => response.json())
        .then((burgers) => {
          
            burgers.map((burger) => {
                return setName(burger.name), setImage_url(burger.image_url), setPrice(burger.price);
            })
        })
      }, [])

return(
    <div className="text-bg-info p-3 " >
    <div className='container'>
        <center>
        <div className='card' style={{width : 25 + 'rem'}} >
        <img src={image_url} style={{height: 300 + 'px', width: 300 + 'px', }} alt={name}
         />
            <h5>Burger:{name}</h5>
            {/* <p>burgerThumbnail:{image_url}</p> */}
            <p>Burger Price:{price}</p>
        </div>
        </center>
    </div>
    </div>
)
}



// import React, {useEffect, useState} from "react";

// export default function BurgerDescription(){

//     const[image, setImage] = useState("")
//     const[burgerName, setBurgerName] = useState("")
//     const [burgerPrice, setBurgerPrice] = useState("")

//     useEffect(() =>{
//         fetch(" http://localhost:5000/burgers")
//         .then(res => res.json())
//         .then((burgers) => {

//             burgers.map((burger)=> {
        
//         return    setImage(burger.image), setBurgerName(burger.name), setBurgerPrice(burger.price)})
//         })
//     })
//     return(
//         <div>
//     <div className="text-bg-info p-3">
//         <div className="container">
//             <div className="card" style={{width : 25 + "rem"}}>
//                 <img src={image} style={{height : 300 + "px", width : 300 + "px"}} alt={burgerName} />
//                    <h5>Burger: {burgerName}</h5> 
//                    <h5>Burger Price: {burgerPrice}</h5>       
//         </div>
//         </div>
//         </div>
//         </div>
//     )
// }