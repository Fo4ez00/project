import  { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState('');

  const login = (name) => {
    setLoggedInUser(name);
    console.log('Logged in as:', name);
  };

  const logout = () => {
    setLoggedInUser('');
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};