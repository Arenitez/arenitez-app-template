import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthContext = {
  isSignIn?: boolean;
};

const AuthContext = createContext<AuthContext>({
  isSignIn: undefined,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    setIsSignIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isSignIn }}>{children}</AuthContext.Provider>
  );
};
