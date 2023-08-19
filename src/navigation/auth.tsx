import { SignInScreen } from '$components/screens/SignIn/SignIn';
import { SignInWithEmailScreen } from '$components/screens/SignInWithEmail/SignInWithEmail';
import { SignUpScreen } from '$components/screens/SignUp/SignUp';
import { AuthNavigatorParamList } from '$navigation/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        component={SignInWithEmailScreen}
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
