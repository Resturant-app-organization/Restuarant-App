import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


const Login = ({ onLogin }) => {
    const [showLogin, setShowLogin] = useState(true);

 return (
   
  <div className="about">
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
        <div className="create">
       
          <SignUpForm onLogin={onLogin} />
         
          <p className="create">
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
          
        </div>
      )}
    
    </div>
  );
}

export default Login