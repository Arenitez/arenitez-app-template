import { SampleScreen } from '$components/screens/Sample';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { SafeAreaView } from 'arenite-kit';

const ModalScreen = () => {
  const edges = getSafeAreaEdges('bottom-horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <SampleScreen />
    </SafeAreaView>
  );
};

export default ModalScreen;
