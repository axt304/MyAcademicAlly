import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../../context/AuthContext'; // Adjust the import path according to your project structure
import { Link } from 'react-router-dom';
import api from '../../api/api';
import '../login/AuthForm.css';

const Signup = () => {
  const [name, setName] = useState(''); //state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//const { setAuth } = useContext(AuthContext); // Using AuthContext
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await api.post('/users', { name, email, password });
      if (response.data) {
       // setAuth({ email,`: token: response.data.token });
        navigate('../dashboard'); // Redirect to dashboard after successful signup
      }
    } catch (error) {                                                                                                                                                                                                                                                   
      alert("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleSignup}>
            <div className="field input-field">
              <input 
                type="text" 
                placeholder="Name" 
                className="input" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
          <span>Already have an account? <Link to="/login" className="link login-link">Login</Link></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
