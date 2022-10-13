import React,{ useState} from 'react';


const AddReview= ({customer_id, description, burger_id,handleReview}) => {
   
    const [newCustomer_id, setNewCustomer_id] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newBurger_id, setNewBurger_id] = useState("");

    function handleNewTitle(event){
        setNewCustomer_id(event.target.value)
      }

      function handleNewDescription(event){
        setNewDescription(event.target.value)
      }

      function handleNewPostDate(event){
        setNewBurger_id(event.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const NewReview = { 
            customer_id:newCustomer_id,
            description :newDescription,
            burger_id: newBurger_id
        };

        fetch('http://localhost:8000/reviews', {
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
                <label>Burger</label>
                    <input
                        className="form-control"
                        type="text"
                         name="title"
                        value={customer_id}
                        onChange={handleNewTitle}
                        placeholder="Enter burger title here..."/>
                
                <label>Review</label>
                <input 
                    type="text"
                    required
                    value={description}
                    onChange={handleNewDescription}
                    placeholder="drop a comment to review our burger..."/>
               
                <label>post Date</label>
                <input 
                    type="date"
                    required
                    value={burger_id}
                    onChange={handleNewPostDate}
                    placeholder="Enter postDate here..."/>
               
                {<button>Post Review</button>}
            </form>
        </div>
     );
}

export default AddReview;