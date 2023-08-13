import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { Button, SafeAreaView } from 'arenite-kit';

export const SampleScreen = () => {
  const edges = getSafeAreaEdges('bottom-horizontal');

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={edges}
      bg={'bg1'}
    >
      <Button bg={'primary'} color={'white'}>
        サンプル
      </Button>
    </SafeAreaView>
  );
};
