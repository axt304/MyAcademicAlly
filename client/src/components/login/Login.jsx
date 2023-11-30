import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { AuthContext } from '../../context/AuthContext';
import './AuthForm.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); //  AuthContext to manage auth state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      if (response.data) {

        setAuth({ email, token: response.data.token }); // Set auth state
        navigate('../dashboard'); // Redirect to the dashboard
      }
    } catch (error) {
      // Handle login errors (e.g., incorrect credentials)
      alert('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  return (
    <section className="container forms">
      <div className="welcome">
        <header>Welcome Back!</header>
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
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
          <span>Don't have an account? <Link to="/signup" className="link signup-link">Signup</Link></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
