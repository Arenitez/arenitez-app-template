import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ComponentsScreen } from '$components/screens/Components/ComponentsScreen';
import type { ComponentsNavigatorParamList } from '$navigation/navigate';

const NativeStack = createNativeStackNavigator<ComponentsNavigatorParamList>();

export const ComponentsNavigator = () => {
  return (
    <NativeStack.Navigator
      initialRouteName="ComponentsScreen"
      screenOptions={{ headerShown: false }}
    >
      <NativeStack.Screen
        name="ComponentsScreen"
        component={ComponentsScreen}
        options={{ title: 'Components' }}
      />
    </NativeStack.Navigator>
  );
};
