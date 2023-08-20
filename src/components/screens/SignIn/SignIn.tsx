import { useAuth } from '$components/providers/AuthProvider';
import { SignForm, SignFormValue } from '$components/shared/form/SignForm';
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

  const onPressSignInButton = (_formValues: SignFormValue) => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'} style={style.container}>
      <VStack gap={12}>
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

        <SignForm formType={'sign-in'} onSubmit={onPressSignInButton} />
      </VStack>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  divider: {
    marginVertical: 20,
  },
});
