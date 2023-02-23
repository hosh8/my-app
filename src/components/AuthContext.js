import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const setAuth = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const removeAuth = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
