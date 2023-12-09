import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Missing from './components/missing/Missing';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';  // Added import for Login
import Signup from './components/signup/Signup';  // Added import for Signup
import User from './components/user/User';  // Added import for User profile

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { AuthProvider } from './context/AuthContext';

function App() {
  return (
 //   <AuthProvider> {/* Wrap your application with AuthProvider */}
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Missing />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </div>
    //</AuthProvider>
  );
}

export default App;

