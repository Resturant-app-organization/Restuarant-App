import React, { useState } from "react";

const SignUpForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    setIsLoading(true);
    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((customer) => onLogin(customer));
      } else {
        console.log(r)
        r.json().then((err) => setErrors(err.errors));
      
      }
    });
  }

  return (
    
      
      <div className="create">
        <h2>BOBO SAVOURS</h2>
    <form onSubmit={handleSubmit}>
      
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
      
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      
      
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      
    </form>
    </div>
    
  );
}

export default SignUpForm