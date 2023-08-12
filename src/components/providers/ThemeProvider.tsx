import { useAppBootstrap } from '$hooks/useAppBootstrap';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { AreniteThemeProvider } from 'arenite-kit';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: AppProviderProps) => {
  const { isReady, areniteTheme } = useAppBootstrap();

  if (!isReady) {
    return null;
  }

  return (
    <AreniteThemeProvider value={areniteTheme}>
      <NavigationThemeProvider
        value={areniteTheme.theme === 'dark' ? DarkTheme : DefaultTheme}
      >
        {children}
      </NavigationThemeProvider>
    </AreniteThemeProvider>
  );
};
