import { SampleScreen } from '$components/screens/Sample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linkingConfiguration } from './linking';
import { RootStackParamList } from './navigate';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linkingConfiguration}>
      <RootStack.Navigator>
        <RootStack.Screen name="SignInScreen" component={SampleScreen} />
        <RootStack.Screen name="NotFoundScreen" component={SampleScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
