import {
  AreniteThemeKey,
  ButtonGroup,
  createAreniteStyle,
  Text,
  useAreniteTheme,
  VStack,
} from 'arenite-kit';
import { useState } from 'react';

import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';

type Position = 'left' | 'center' | 'right';

export const ButtonGroupExample = () => {
  const [{ theme }, { setTheme }] = useAreniteTheme();
  const [position, setPosition] = useState<Position>('left');

  const onChangePosition = (value: Position) => {
    setPosition(value);
  };

  const onChangeTheme = async (value: AreniteThemeKey) => {
    setTheme(value);
    await asyncStorage.set(areniteThemeStorageKey, value);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        ButtonGroup
      </Text>

      <ButtonGroup<Position>
        value={position}
        onChange={onChangePosition}
        activeBg="bg9"
        activeColor="color9"
        nonActiveBg="bg2"
        nonActiveColor="color1"
        buttons={[
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' },
          { label: 'Right', value: 'right' },
        ]}
        radius="md"
      />

      <ButtonGroup<AreniteThemeKey>
        value={theme}
        onChange={onChangeTheme}
        activeBg="bg9"
        activeColor="color9"
        nonActiveBg="bg2"
        nonActiveColor="color1"
        buttons={[
          { label: 'Auto', value: 'auto' },
          { label: 'light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'Dracula', value: 'dracula' },
        ]}
        radius="md"
      />
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
