import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from './navigate';

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SignInScreen: {
        path: 'signin',
      },
      NotFoundScreen: '*',
    },
  },
};
