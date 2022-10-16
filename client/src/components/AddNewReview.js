import React,{ useState} from 'react';

const AddReview= ({ handleAddNewReview}) => {
   
    const [description, setDescription] = useState("");
    const [burger, setBurger_id] = useState("");
    const [customer, setCustomer_id] = useState("");
   
      function handleNewDescription(event){
        setDescription(event.target.value)
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        const NewReview= {
             description:description,
             customer_id:customer.id,
             burger_id:burger.id
        }
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(NewReview)
        }).then((response) => response.json())
        .then((review) => { 
            handleAddNewReview(review);
            // console.log(review);
        })
    }

    return ( 
        <div className="create"><br></br>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                
                <label>Review</label>
                <input 
                    type="text"
                    required
                    value={description}
                    onChange={handleNewDescription}
                    placeholder="drop a comment to review our burger..."/>
               
                {<button>Post Review</button>}
            </form>
        </div>
     );
}

export default AddReview;