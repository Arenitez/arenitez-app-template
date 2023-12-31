import {
  createAreniteStyle,
  SafeAreaView,
  ScrollView,
  VStack,
} from 'arenite-kit';

import { ActivityIndicatorExample } from '$components/screens/Components/views/ActivityIndicator';
import { ButtonExample } from '$components/screens/Components/views/Button';
import { ButtonGroupExample } from '$components/screens/Components/views/ButtonGroup';
import { DividerExample } from '$components/screens/Components/views/Divider';
import { FlatListExample } from '$components/screens/Components/views/FlatList';
import { HStackExample } from '$components/screens/Components/views/Hstack';
import { IconButtonExample } from '$components/screens/Components/views/IconButton';
import { ImageExample } from '$components/screens/Components/views/Image';
import { RadioExample } from '$components/screens/Components/views/Radio';
import { TextExample } from '$components/screens/Components/views/Text';
import { TextInputExample } from '$components/screens/Components/views/TextInput';
import { ToastExample } from '$components/screens/Components/views/Toast';
import { VStackExample } from '$components/screens/Components/views/Vstack';
import { SafeAreaEdge } from '$libs/react-native-safe-area-context/safeAreaEdge';

export const ComponentsScreen = () => {
  return (
    <SafeAreaView edges={SafeAreaEdge.Horizontal} bg={'bg1'}>
      <ScrollView>
        <VStack gap={32} style={style.container}>
          <TextExample />
          <TextInputExample />
          <RadioExample />
          <ButtonExample />
          <ButtonGroupExample />
          <IconButtonExample />
          <ImageExample />
          <FlatListExample />
          <VStackExample />
          <HStackExample />
          <ToastExample />
          <DividerExample />
          <ActivityIndicatorExample />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 160,
  },
});
