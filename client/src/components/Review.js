import React, {useState, useEffect} from "react";
import AddReview from "./AddNewReview";

export default function Review(){

    const [reviews, setReviewList] = useState([]);

    const MyReviews = () => {
      fetch("http://localhost:3000/reviews")
        .then((response) => response.json())
        .then((reviews) => {
      
          setReviewList(reviews);
        });
    };
  
    useEffect(MyReviews, []);

    function handleDelete(id) {
        fetch(`http://localhost:3000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            const deleteReview = reviews.filter((review) => review.id !== id);
            setReviewList(deleteReview);
          });
      }


//   function handleFormSubmit(e) {
//     e.preventDefault();

//     fetch(`http://localhost:8000.reviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: reviews,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedReview) => onUpdateReview(updatedReview));
//   }

      function handleAddNewReview(review){
        setReviewList([...reviews,review])
    
      }

    return(
        // <div className='card ' style={{width :25 + 'rem'}}>
          <div className="text-bg-info p-3">
         <h1>Burger Reviews</h1>
         {
                  reviews.map((review) => ( 
                      <ol key = { review.id } >
                          Customer: &nbsp;{review.customer_id}<br></br>
                          Description: &nbsp;{review.description} <br></br>
                          Burger: &nbsp;{review.burger_id} <br></br>

                          {/* <form className="edit-message" onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                name="body"
                                autoComplete="off"
                                value={reviews}
                                onChange={(e) => setReviewList(e.target.value)}
                            />
                            <input type="submit" value="Save" />
                            </form> */}
  
                          <button className="App-button" style={{backgroundColor: "red"}}onClick={(e) => (
                          handleDelete(review.id)
                        )} ><span role="img" aria-label="delete">
                        🗑
                      </span>Delete</button >
                          </ol>
                          
                      ))
                  }
                    <AddReview handleAddNewReview={handleAddNewReview}/>
          </div>
        //   </div>
    )
}