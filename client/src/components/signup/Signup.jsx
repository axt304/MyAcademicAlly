import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../../context/AuthContext'; // Adjust the import path according to your project structure
import { Link } from 'react-router-dom';
import api from '../../api/api';
import '../login/AuthForm.css';

const Signup = () => {
  const [name, setName] = useState('');
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
    const response = await api.post('/api/users', { name, email, password });
    if (response.data && response.data.message === "User created successfully") {
      alert('Signup successful. Please log in.'); // Show success message
      navigate('../dashboard'); // Redirect to dashboard after successful signup
    } else {
      alert('Signup failed. Please try again.');
    }
  } catch (error) {
    alert('Signup failed. Please try again.');
    console.error('Signup error:', error);
  }
};

  return (
    <section className="container forms">
      <div className="welcome">
        <header>MyAcademicAlly</header>
      </div>
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
