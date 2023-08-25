import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemingScreen } from '$components/screens/Theming/ThemingScreen';
import type { ThemingNavigatorParamList } from '$navigation/navigate';

const NativeStack = createNativeStackNavigator<ThemingNavigatorParamList>();

export const ThemingNavigator = () => {
  return (
    <NativeStack.Navigator
      initialRouteName="ThemingScreen"
      screenOptions={{ headerShown: false }}
    >
      <NativeStack.Screen
        name="ThemingScreen"
        component={ThemingScreen}
        options={{ title: 'Theming' }}
      />
    </NativeStack.Navigator>
  );
};
