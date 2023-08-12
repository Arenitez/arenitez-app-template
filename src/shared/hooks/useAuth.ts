import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isSignIn, setIsSignIn] = useState<boolean | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  return {
    isSignIn,
  };
};
