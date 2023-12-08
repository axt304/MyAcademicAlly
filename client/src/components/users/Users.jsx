import React from 'react';
import './User.css';

const UserProfile = ({ name, email, password }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
      </div>
    </div>
  );
};

export default UserProfile;
