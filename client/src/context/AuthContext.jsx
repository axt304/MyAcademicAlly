import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await api.get('/auth/me');
        setCurrentUser(response.data.user);
      } catch (error) {
        setCurrentUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    setCurrentUser(response.data.user);
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoading, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
