import { useRouter } from 'expo-router';
import { ReactNode, useEffect } from 'react';
import { useAuthContext } from './AuthProvider';

type AppGuardProviderProps = {
  children: ReactNode;
};

export const AppGuardProvider = ({ children }: AppGuardProviderProps) => {
  const { isSignIn } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (isSignIn) {
        router.replace('/');
      } else {
        router.replace('/sign-in');
      }
    }, 1);
  }, []);

  return <>{children}</>;
};
