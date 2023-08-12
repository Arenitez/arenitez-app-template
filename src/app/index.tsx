import { TopScreen } from '$components/screens/Top';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { createAreniteStyle, SafeAreaView } from 'arenite-kit';

const IndexScreen = () => {
  const edges = getSafeAreaEdges('bottom-horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'} style={[styles.container]}>
      <TopScreen />
    </SafeAreaView>
  );
};

export const styles = createAreniteStyle({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndexScreen;
