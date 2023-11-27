import React, { useState } from 'react';
import api from '../../api/api';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic to submit the data to backend
      const response = await api.post('/login', { email, password });
      // Handle the response, e.g., storing the token, redirecting, etc.
    } catch (error) {
      // Handle errors, e.g., showing an error message
    }
  };

 return (
        <div className="cont">
            {/* Login Form */}
            <div className="form sign-in">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email</span>
                        <input type="email" required />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" required />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="submit" className="submit">Sign In</button>
                </form>
            </div>
            {/* ... rest of your HTML ... */}
        </div>
    );
};

export default Login;
                                    
                               
                 
                        
                     
                         
                                                      
            
                                      
              
                               
                 
                            
                     
                            
                                                         
            
                                 
              
                                     
             
          
    
 

                     

