const commonPallet = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963ff4',
  },
};

const colorPallet = {
  light: {
    color0: '#FFFFFF',
    color1: '#070417',
    color2: '#C2C6D2',
  },
  dark: {
    color0: '#27272a',
    color1: '#FFFFFF',
    color2: '#A1A1AA',
  },
};
const bgPallet = {
  light: {
    bg0: '#ffffff00',
    bg1: '#F1F5F9',
    bg2: '#FFFFFF',
  },
  dark: {
    bg0: '#00000000',
    bg1: '#27272a',
    bg2: '#3f3f45',
  },
};

const borderPallet = {
  light: {
    border1: '#C2C6D2',
    border2: '#E5E7EB',
  },
  dark: {
    border1: '#5a5a64',
    border2: '#3f3f45',
  },
};

const iconPallet = {
  light: {
    icon1: '#070417',
    icon2: '#ffffff',
  },
  dark: {
    icon1: '#ffffff',
    icon2: '#070417',
  },
};

export const myThemePallets = {
  common: commonPallet,
  color: colorPallet,
  bg: bgPallet,
  border: borderPallet,
  icon: iconPallet,
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    pallets: typeof myThemePallets;
  }
}
