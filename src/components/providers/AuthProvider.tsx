import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextValue = {
  isAuthenticated: boolean;
  user: FirebaseAuthTypes.User | null;
  signIn: (authUser: FirebaseAuthTypes.User) => void;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextValue);

type AuthProviderProps = {
  children: ReactNode;
  value: Pick<AuthContextValue, 'isAuthenticated' | 'user'>;
};

export const AuthProvider = ({ children, value }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{
    user: FirebaseAuthTypes.User | null;
    isAuthenticated: boolean;
  }>(value);

  const signIn = (authUser: FirebaseAuthTypes.User) => {
    setAuthState({ user: authUser, isAuthenticated: true });
  };

  const signOut = () => {
    setAuthState({ user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
