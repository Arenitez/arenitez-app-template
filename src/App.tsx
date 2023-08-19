import { AuthProvider } from '$components/providers/AuthProvider';
import { ThemeProvider } from '$components/providers/ThemeProvider';
import { useAppBootstrap } from '$hooks/useAppBootstrap';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation';

export default function App() {
  const { isReady, authValue, themeValue } = useAppBootstrap();

  if (!isReady) {
    return null;
  }

  return (
    <AuthProvider value={authValue}>
      <ThemeProvider value={themeValue}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
