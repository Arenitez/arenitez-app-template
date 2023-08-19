import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextValue = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextValue);

type AuthProviderProps = {
  children: ReactNode;
  value: Pick<AuthContextValue, 'isAuthenticated'>;
};

export const AuthProvider = ({ children, value }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    value.isAuthenticated
  );

  const signIn = () => {
    setIsAuthenticated((prev) => !prev);
  };

  const signOut = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
