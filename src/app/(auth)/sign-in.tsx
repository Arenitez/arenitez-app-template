import { TopScreen } from '$components/screens/Top';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { SafeAreaView, Text } from 'arenite-kit';

const IndexScreen = () => {
  const edges = getSafeAreaEdges('top-horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <Text>SignIn</Text>
      <TopScreen />
    </SafeAreaView>
  );
};

export default IndexScreen;
