import { SafeAreaView, Text } from 'arenite-kit';

import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';

export const ThemingScreen = () => {
  const edges = getSafeAreaEdges('horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'} isCenter>
      <Text color={'color1'}>ThemingScreen</Text>
    </SafeAreaView>
  );
};
