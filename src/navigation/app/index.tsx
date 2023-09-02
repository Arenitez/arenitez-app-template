import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import { IconButton, useToast } from 'arenite-kit';
import { Alert } from 'react-native';

import { useAuth } from '$components/providers/AuthProvider';
import { ThemingIcon } from '$components/shared/ThemingIcon';
import { ToastId } from '$libs/arenite-kit/toastId';
import { firebaseAuth } from '$libs/firebase/auth';
import { ComponentsNavigator } from '$navigation/app/components';
import { ThemingNavigator } from '$navigation/app/theming';
import type { AppNavigatorParamList } from '$navigation/navigate';
import { RootParamList } from '$navigation/navigate';

const BottomTab = createBottomTabNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ComponentsNavigator"
      screenOptions={{
        headerRight: () => <SignInStatusIconButton />,
        headerRightContainerStyle: {
          paddingRight: 8,
        },
      }}
    >
      <BottomTab.Screen
        name="ComponentsNavigator"
        component={ComponentsNavigator}
        options={() => ({
          title: 'Components',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'flower' : 'flower-outline'}
              size={24}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="ThemingNavigator"
        component={ThemingNavigator}
        options={() => ({
          title: 'Theming',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'color-palette' : 'color-palette-outline'}
              size={24}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const { signOut: firebaseSignOut } = firebaseAuth;

const SignInStatusIconButton = () => {
  const { isAuthenticated, signOut } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const onPressNavigateAuth = () => {
    if (!isAuthenticated) {
      navigation.navigate('AuthNavigator');
      return;
    }

    Alert.alert('Sign Out', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        style: 'default',
        onPress: async () => {
          try {
            await firebaseSignOut();
            signOut();
            toast.addToast({
              id: ToastId.SignOutSuccess,
              type: 'success',
              message: 'サインアウトしました',
            });
          } catch {
            toast.addToast({
              id: ToastId.SignOutError,
              type: 'error',
              message: 'サインアウトに失敗しました',
            });
          }
        },
      },
    ]);
  };

  return (
    <IconButton size={40} bg={'bg0'} onPress={onPressNavigateAuth}>
      <ThemingIcon
        size={26}
        icon={isAuthenticated ? 'success' : 'danger'}
        name={
          isAuthenticated ? 'checkmark-circle-outline' : 'alert-circle-outline'
        }
      />
    </IconButton>
  );
};
