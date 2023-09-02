import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import type { AreniteTheme, AreniteThemeKey } from 'arenite-kit';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { myThemePalettes } from '$libs/arenite-kit/areniteConfig';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';

type FirebaseUser = FirebaseAuthTypes.User | null;

SplashScreen.preventAutoHideAsync();

export const useAppBootstrap = () => {
  const [isAuthenticated] = useState(false);
  const [user, setUser] = useState<FirebaseUser>(null);
  const [isReady, setIsReady] = useState(false);
  const [userTheme, setUserTheme] = useState<AreniteThemeKey>('auto');

  useEffect(() => {
    const prepare = async () => {
      try {
        // get user theme from async storage
        const areniteThemeResult = await asyncStorage.get<AreniteThemeKey>(
          areniteThemeStorageKey
        );
        if (!areniteThemeResult) {
          return;
        }
        setUserTheme(areniteThemeResult);
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare().then();

    const subscribe = auth().onAuthStateChanged(
      (firebaseUser: FirebaseUser) => {
        setUser(firebaseUser);
      }
    );
    return subscribe;
  }, []);

  const authValue = {
    isAuthenticated,
    user,
  };

  const themeValue: AreniteTheme = {
    theme: userTheme,
    palettes: myThemePalettes,
  };

  return { isReady, themeValue, authValue };
};
