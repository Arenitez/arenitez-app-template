import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/core/src/types';
import {
  Box,
  Button,
  createAreniteStyle,
  Image,
  SafeAreaView,
  VStack,
} from 'arenite-kit';

import { ThemingIcon } from '$components/shared/ThemingIcon';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { AuthNavigatorParamList, RootParamList } from '$navigation/navigate';

export const SignUpScreen = () => {
  const navigation =
    useNavigation<NavigationProp<RootParamList & AuthNavigatorParamList>>();
  const edges = getSafeAreaEdges('horizontal');

  const onPressContinueWithAppleButton = () => {
    navigation.navigate('AppNavigator');
  };

  const onPressContinueWithGoogleButton = () => {
    navigation.navigate('AppNavigator');
  };

  const onPressSignUpWithEmailButton = () => {
    navigation.navigate('SignUpWithEmailScreen');
  };

  const onPressSignInButton = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'} style={style.container}>
      <Box style={style.brandContainer}>
        <Image
          width={120}
          height={120}
          border={'border2'}
          bg={'white'}
          source={require('assets/images/arenitez.png')}
          style={style.brandLogo}
          resizeMode={'contain'}
        />
      </Box>

      <VStack gap={12}>
        <Button
          bg={'black'}
          color={'white'}
          left={<ThemingIcon name={'logo-apple'} size={20} icon={'white'} />}
          onPress={onPressContinueWithAppleButton}
        >
          Continue with Apple
        </Button>

        <Button
          bg={'white'}
          color={'black'}
          border={'border1'}
          left={<ThemingIcon name={'logo-google'} size={20} icon={'black'} />}
          onPress={onPressContinueWithGoogleButton}
        >
          Continue with Google
        </Button>

        <Button
          bg={'secondary'}
          color={'white'}
          left={<ThemingIcon name={'mail'} size={20} icon={'white'} />}
          onPress={onPressSignUpWithEmailButton}
        >
          Sign up with Email
        </Button>

        <Button
          bg={'bg1'}
          border={'border1'}
          color={'color1'}
          left={
            <ThemingIcon
              name={'arrow-up-circle-outline'}
              size={20}
              icon={'icon1'}
            />
          }
          onPress={onPressSignInButton}
        >
          Sign in
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  brandContainer: {
    alignSelf: 'center',
    paddingBottom: 40,
  },
  brandLogo: {
    borderRadius: 8,
  },
});
