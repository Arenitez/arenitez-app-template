import { useAuth } from '$components/providers/AuthProvider';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { RootParamList } from '$navigation/navigate';
import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import {
  Button,
  createAreniteStyle,
  SafeAreaView,
  Text,
  TextInput,
  VStack,
} from 'arenite-kit';

export const SignInWithEmailScreen = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const edges = getSafeAreaEdges('horizontal');

  const onPressSignUpButton = () => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <VStack gap={12} style={style.container}>
        <Text style={style.label} color={'color1'}>
          Email
        </Text>
        <TextInput
          placeholder={'Type your email'}
          bg={'bg2'}
          color={'color1'}
          selectionColor={'primary'}
          placeholderTextColor={'color2'}
        />

        <Text style={style.label} color={'color1'}>
          Password
        </Text>
        <TextInput
          placeholder={'Type your password'}
          bg={'bg2'}
          color={'color1'}
          selectionColor={'primary'}
          placeholderTextColor={'color2'}
        />

        <Button bg={'primary'} color={'white'} onPress={onPressSignUpButton}>
          Sign up
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  label: {
    fontSize: 18,
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
});
