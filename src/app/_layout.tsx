import { ThemeProvider } from '$components/providers/ThemeProvider';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

export { ErrorBoundary } from 'expo-router';

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'HOME',
            headerRight: () => (
              <Link href="/modal" asChild>
                <FontAwesome name="info-circle" size={24} />
              </Link>
            ),
          }}
        />
        <Stack.Screen name="sign-in" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal-two" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
