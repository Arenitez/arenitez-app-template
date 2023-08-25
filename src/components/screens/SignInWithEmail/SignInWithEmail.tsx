import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import { createAreniteStyle, SafeAreaView } from 'arenite-kit';

import { useAuth } from '$components/providers/AuthProvider';
import { SignForm, SignFormValue } from '$components/shared/form/SignForm';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { RootParamList } from '$navigation/navigate';

export const SignInWithEmailScreen = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const edges = getSafeAreaEdges('horizontal');

  const onPressSignUpButton = (_formValues: SignFormValue) => {
    signIn();
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView style={style.container} edges={edges} bg={'bg1'}>
      <SignForm formType={'sign-in'} onSubmit={onPressSignUpButton} />
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
