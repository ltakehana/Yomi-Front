import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const history = useHistory();

  useEffect(() => {
    async function loadStoragedData() {
      const accessToken = await sessionStorage.getItem('userToken');
      if (accessToken) {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        setToken(`Bearer ${accessToken}`);
      }
    }

    loadStoragedData();
  }, []);

  const signIn = async (username, password) => {
    try {
      const response = await auth(username, password);
      if (response.result !== null) {
        api.defaults.headers.Authorization = `Bearer ${response.result}`;
        setToken(`Bearer ${response.result}`);
        history.push('/');
      } else {
        alert(response.message);
        return (0);
      }
    } catch (error) {
       console.error(error);
    }
  };

  const signOut = () => {
    sessionStorage.clear();
    history.push("/")
    window.location.reload(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
