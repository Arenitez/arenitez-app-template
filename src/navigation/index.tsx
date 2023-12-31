import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TopScreen } from '$components/screens/Top/TopScreen';
import { useNativeTheme } from '$hooks/useNativeTheme';
import { AppNavigator } from '$navigation/app';
import { AuthNavigator } from '$navigation/auth';
import { linkingConfiguration } from '$navigation/linking';
import type { RootParamList } from '$navigation/navigate';

const NativeStack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  const nativeTheme = useNativeTheme();

  return (
    <NavigationContainer theme={nativeTheme} linking={linkingConfiguration}>
      <NativeStack.Navigator initialRouteName="TopScreen">
        <NativeStack.Screen
          name="TopScreen"
          component={TopScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
