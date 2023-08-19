import { useAuth } from '$components/providers/AuthProvider';
import { ThemingIcon } from '$components/shared/ThemingIcon';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { RootParamList } from '$navigation/navigate';
import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import {
  Button,
  createAreniteStyle,
  Divider,
  SafeAreaView,
  Text,
  TextInput,
  VStack,
} from 'arenite-kit';

export const SignInScreen = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const edges = getSafeAreaEdges('horizontal');

  const onPressSignInWithAppleButton = () => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  const onPressSignInWithGoogleButton = () => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  const onPressSignInButton = () => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <VStack gap={12} style={style.container}>
        <Button
          bg={'black'}
          color={'white'}
          left={<ThemingIcon name={'logo-apple'} size={18} icon={'white'} />}
          onPress={onPressSignInWithAppleButton}
        >
          Sign in with Apple
        </Button>

        <Button
          bg={'white'}
          color={'black'}
          border={'border1'}
          left={<ThemingIcon name={'logo-google'} size={18} icon={'black'} />}
          onPress={onPressSignInWithGoogleButton}
        >
          Sign in with Google
        </Button>

        <Divider label={'or'} color={'color1'} border={'border1'} />

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

        <Button bg={'primary'} color={'white'} onPress={onPressSignInButton}>
          Sign up
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  divider: {
    marginVertical: 16,
  },
  label: {
    fontSize: 18,
  },
});
