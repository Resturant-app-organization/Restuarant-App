import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


const Login = ({ onLogin }) => {
    const [showLogin, setShowLogin] = useState(true);

 return (
   
    <>
      {showLogin ? (
     
     <div className="create">
          
          <LoginForm onLogin={onLogin} />
         
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
          
        </div>
      ) : (
        <>
       
          <SignUpForm onLogin={onLogin} />
         
          <p className="create">
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
          
        </>
      )}
    </>
    
  );
}

export default Login