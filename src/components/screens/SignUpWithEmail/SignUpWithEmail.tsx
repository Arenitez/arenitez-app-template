import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import { createAreniteStyle, SafeAreaView, useToast } from 'arenite-kit';

import { useAuth } from '$components/providers/AuthProvider';
import { SignForm, SignFormValue } from '$components/shared/form/SignForm';
import { ToastId } from '$libs/arenite-kit/toastId';
import { firebaseAuth } from '$libs/firebase/auth';
import { SafeAreaEdge } from '$libs/react-native-safe-area-context/safeAreaEdge';
import { RootParamList } from '$navigation/navigate';

const { signUpWithEmail, catchFirebaseAuthError } = firebaseAuth;

export const SignUpWithEmailScreen = () => {
  const { signIn } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const onPressSignUpButton = async (values: SignFormValue) => {
    try {
      const result = await signUpWithEmail(values);
      signIn(result.user);

      navigation.navigate('AppNavigator');
      toast.addToast({
        id: ToastId.SignUpEmailSuccess,
        type: 'success',
        message: 'サインアップに成功しました',
      });
    } catch (error) {
      const errorMessage = catchFirebaseAuthError(error);
      toast.addToast({
        id: ToastId.SignUpEmailError,
        type: 'error',
        message: errorMessage,
      });
    }
  };

  return (
    <SafeAreaView
      style={style.container}
      edges={SafeAreaEdge.Horizontal}
      bg={'bg1'}
    >
      <SignForm formType={'sign-up'} onSubmit={onPressSignUpButton} />
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
