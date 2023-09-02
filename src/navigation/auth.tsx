import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '$components/screens/SignIn/SignIn';
import { SignUpScreen } from '$components/screens/SignUp/SignUp';
import { SignUpWithEmailScreen } from '$components/screens/SignUpWithEmail/SignUpWithEmail';
import { AuthNavigatorParamList } from '$navigation/navigate';

const NativeStack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="SignUpScreen">
      <NativeStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: 'Sign up' }}
      />
      <NativeStack.Screen
        name="SignUpWithEmailScreen"
        component={SignUpWithEmailScreen}
        options={{ title: 'Sign up with Email' }}
      />
      <NativeStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: 'Sign in' }}
      />
    </NativeStack.Navigator>
  );
};
