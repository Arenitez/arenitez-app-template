import { AuthProvider } from '$components/providers/AuthProvider';
import { ThemeProvider } from '$components/providers/ThemeProvider';
import { RootNavigator } from './src/navigate';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
