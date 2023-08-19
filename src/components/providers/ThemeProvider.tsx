import { AreniteTheme, AreniteThemeProvider, Toast } from 'arenite-kit';
import type { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
  value: AreniteTheme;
};

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return (
    <AreniteThemeProvider value={value}>
      <Toast.Provider topOffset={112}>
        {children}
        <Toast />
      </Toast.Provider>
    </AreniteThemeProvider>
  );
};
