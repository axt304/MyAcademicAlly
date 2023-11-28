import React, { useState } from 'react';
import './AuthForm.css'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    //login logic here
    console.log("Login details:", { email, password });
  };

  return (
    <section className="container forms">
      <div className="welcome">
        <header> Welcome Back!</header>
        </div>
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleLogin}>
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
                placeholder="Password" 
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Implement password show/hide toggle */}
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>Don't have an account? <a href="#" className="link signup-link">Signup</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
