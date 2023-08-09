import { myThemePallets } from '@/src/shared/libs/arenite-kit/arenite.config';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { AreniteThemeProvider } from 'arenite-kit';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AreniteThemeProvider value={{ theme: 'dark', pallets: myThemePallets }}>
      <ThemeProvider value={DarkTheme}>{children}</ThemeProvider>
    </AreniteThemeProvider>
  );
};
