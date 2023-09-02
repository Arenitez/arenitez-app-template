import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import {
  Button,
  createAreniteStyle,
  Divider,
  SafeAreaView,
  useToast,
  VStack,
} from 'arenite-kit';

import { useAuth } from '$components/providers/AuthProvider';
import { SignForm, SignFormValue } from '$components/shared/form/SignForm';
import { ThemingIcon } from '$components/shared/ThemingIcon';
import { ToastId } from '$libs/arenite-kit/toastId';
import { firebaseAuth } from '$libs/firebase/auth';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { RootParamList } from '$navigation/navigate';

const { signInWithEmail, catchFirebaseAuthError } = firebaseAuth;

export const SignInScreen = () => {
  const { signIn } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const edges = getSafeAreaEdges('horizontal');

  const onPressSignInWithAppleButton = () => {
    navigation.navigate('AppNavigator');
  };

  const onPressSignInWithGoogleButton = () => {
    navigation.navigate('AppNavigator');
  };

  const onPressSignInButton = async (formValues: SignFormValue) => {
    try {
      const result = await signInWithEmail(formValues);
      signIn(result.user);

      navigation.navigate('AppNavigator');
      toast.addToast({
        id: ToastId.SignInEmailSuccess,
        type: 'success',
        message: 'サインインに成功しました',
      });
    } catch (error) {
      const errorMessage = catchFirebaseAuthError(error);
      toast.addToast({
        id: ToastId.SignInEmailError,
        type: 'error',
        message: errorMessage,
      });
    }
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'} style={style.container}>
      <VStack gap={12}>
        <Button
          bg={'black'}
          color={'white'}
          left={<ThemingIcon name={'logo-apple'} size={20} icon={'white'} />}
          onPress={onPressSignInWithAppleButton}
        >
          Sign in with Apple
        </Button>

        <Button
          bg={'white'}
          color={'black'}
          border={'border1'}
          left={<ThemingIcon name={'logo-google'} size={20} icon={'black'} />}
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
