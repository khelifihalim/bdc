import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Fonction pour gérer la connexion
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${backendUrl}/auth/login`, credentials, {
        withCredentials: true, // Si tu utilises des cookies pour la session
      });
      setAuth(response.data.user); // Par exemple, on définit l'utilisateur après la connexion
    } catch (error) {
      console.error("Erreur de connexion: ", error);
    }
  };

  // Fonction pour gérer la déconnexion
  const logout = async () => {
    try {
      await axios.post(`${backendUrl}/auth/logout`, {}, {
        withCredentials: true,
      });
      setAuth(null);
    } catch (error) {
      console.error("Erreur de déconnexion: ", error);
    }
  };

  // Exemple d'une fonction pour vérifier l'état d'authentification
  const checkAuth = async () => {
    try {
      const response = await axios.get(`${backendUrl}/auth/check`, {
        withCredentials: true,
      });
      setAuth(response.data.user);
    } catch (error) {
      setAuth(null);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

