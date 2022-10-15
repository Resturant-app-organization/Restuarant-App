import React,{ useState} from 'react';


const AddReview= ({description, handleReview}) => {
   
    const [newDescription, setNewDescription] = useState("");


      function handleNewDescription(event){
        setNewDescription(event.target.value)
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        const NewReview = { 
            description :newDescription
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