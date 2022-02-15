import { useState, createContext, useContext } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [type, setType] = useState('signin');

  const UserValues = { user, setUser, type, setType };

  return (
    <UserContext.Provider value={UserValues}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider');
  }

  return context;
}
