import { Edges } from 'react-native-safe-area-context';

export const SafeAreaEdge: Record<string, Edges> = {
  Horizontal: ['left', 'right'],
  TopHorizontal: ['top', 'left', 'right'],
  BottomHorizontal: ['bottom', 'left', 'right'],
  VerticalHorizontal: ['top', 'bottom', 'left', 'right'],
};
