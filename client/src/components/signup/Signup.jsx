import React, { useState } from 'react';
import '../login/AuthForm.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    //ignup logic here
    console.log("Signup details:", { email, password, confirmPassword });
  };

  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleSignup}>
            <div className="field input-field">
              <input 
                type="email" 
                placeholder="Email" 
                className="input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field input-field">
              <input 
                type="password" 
                placeholder="Create password" 
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Implement password*/}
            </div>

            <div className="field input-field">
              <input 
                type="password" 
                placeholder="Confirm password" 
                className="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {/* Implement password show/hide toggle */}
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>Already have an account? <a href="#" className="link login-link">Login</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;