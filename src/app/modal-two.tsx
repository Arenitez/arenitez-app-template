import { SampleScreen } from '$components/screens/Sample';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { SafeAreaView, Text } from 'arenite-kit';
import { Link } from 'expo-router';

const ModalScreen = () => {
  const edges = getSafeAreaEdges('bottom-horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <Text>Modal</Text>
      <Link href="/" asChild>
        <Text>Sign In</Text>
      </Link>
      <SampleScreen />
    </SafeAreaView>
  );
};

export default ModalScreen;
