import {
  createAreniteStyle,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'arenite-kit';

import { ThemingIcon } from '$components/shared/ThemingIcon';

export const IconButtonExample = () => {
  const onPress = () => {
    console.log('onPress');
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        IconButton
      </Text>

      <HStack justify={'space-between'}>
        <IconButton bg={'primary'} onPress={onPress}>
          <ThemingIcon icon={'white'} name={'home-outline'} />
        </IconButton>

        <IconButton bg={'secondary'} onPress={onPress}>
          <ThemingIcon icon={'white'} name={'search-outline'} />
        </IconButton>

        <IconButton bg={'tertiary'} onPress={onPress}>
          <ThemingIcon icon={'white'} name={'chatbubbles-outline'} />
        </IconButton>

        <IconButton bg={'accent'} onPress={onPress}>
          <ThemingIcon icon={'white'} name={'notifications-outline'} />
        </IconButton>

        <IconButton bg={'danger'} onPress={onPress}>
          <ThemingIcon icon={'white'} name={'trash-outline'} />
        </IconButton>

        <IconButton
          bg={'bg2'}
          border={'border1'}
          viewStyle={style.roundedButton}
          onPress={onPress}
        >
          <ThemingIcon name={'settings-outline'} icon={'icon1'} />
        </IconButton>
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  roundedButton: {
    borderRadius: 100,
  },
});
