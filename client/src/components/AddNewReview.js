import React,{ useState} from 'react';


const AddReview= ({customer_id, burger_id, description, handleReview}) => {
   
    const [newDescription, setNewDescription] = useState("");
    const [newBurgerId, setNewBurgerId] = useState("");
    const [newCustomerId, setNewCustomerId] = useState("");


    function handleNewBurger(event){
        setNewBurgerId(event.target.value)
      }

      function handleNewCustomer(event){
        setNewCustomerId(event.target.value)
      }

      function handleNewDescription(event){
        setNewDescription(event.target.value)
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        const NewReview = { 
            description :newDescription,
            customer_id :newCustomerId,
            burger_id :newBurgerId
        };

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(NewReview)
        }).then((response) => response.json())
        .then((review) => { 
            handleReview(review);
        })
    }

    return ( 
        <div className="create"><br></br>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
            <label>Customer</label>
                <input 
                    type="integer"
                    required
                    value={customer_id}
                    onChange={handleNewCustomer}
                    placeholder="Enter customer id..."/>

            <label>Burger</label>
                <input 
                    type="integer"
                    required
                    value={burger_id}
                    onChange={handleNewBurger}
                    placeholder="Enter burger id..."/>
                
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