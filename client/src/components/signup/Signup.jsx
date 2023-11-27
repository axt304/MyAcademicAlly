import React, { useState } from 'react';
import './Signup.css'; // Make sure to link the correct CSS file

const Signup = () => {
    // State for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    // Mock function to simulate signup process
    const handleSignup = (e) => {
        e.preventDefault();
        // integrate signup logic, possibly sending a request to your backend
        console.log("Signup Details:", { name, email, password });
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
            <div className="form sign-up">
                <h2>Create your Account</h2>
                <form onSubmit={handleSignup}>
                    <label>
                        <span>Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button type="submit" className="submit">Sign Up</button>
                </form>
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h3>Already have an account? Please Sign in!</h3>
                    </div>
                    <div className="img__btn" onClick={() => setIsSignUp(!isSignUp)}>
                        <span className="m--up">Sign In</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

