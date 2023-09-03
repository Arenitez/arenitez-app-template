import { SafeAreaView, Text } from 'arenite-kit';

import { SafeAreaEdge } from '$libs/react-native-safe-area-context/safeAreaEdge';

export const ThemingScreen = () => {
  return (
    <SafeAreaView edges={SafeAreaEdge.Horizontal} bg={'bg1'} isCenter>
      <Text color={'color1'}>ThemingScreen</Text>
    </SafeAreaView>
  );
};
