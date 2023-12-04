import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure this is correctly pointing to your CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1 className="main-title">My Academic Ally</h1>
      <div className="button-container">
        <div>
          <button className="btn" onClick={() => handleNavigate('/signup')}>
            <i className="animation"></i>
            Sign Up
            <i className="animation"></i>
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => handleNavigate('/login')}>
            <i className="animation"></i>
            Login
            <i className="animation"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;