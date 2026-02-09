import { MD3DarkTheme, configureFonts } from 'react-native-paper';

const accent = '#39D98A';

export const appTheme = {
  ...MD3DarkTheme,
  roundness: 14,
  fonts: configureFonts({ config: { fontFamily: 'System' } }),
  colors: {
    ...MD3DarkTheme.colors,
    primary: accent,
    secondary: accent,
    tertiary: accent,
    background: '#0D1117',
    surface: '#161B22',
    surfaceVariant: '#1F2631',
    outline: '#2B3240',
    onPrimary: '#04140D',
    onBackground: '#F5F7FA',
    onSurface: '#F5F7FA'
  }
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 22,
  xl: 30
};
