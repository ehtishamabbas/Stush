import React, { createContext, useContext, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContextType = {
    user,
    setUser
  };

  return React.createElement(UserContext.Provider, { value }, children);
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
