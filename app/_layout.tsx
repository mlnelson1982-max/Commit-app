import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { appTheme } from '@/constants/theme';
import { GroceryProvider } from '@/context/GroceryContext';

export default function RootLayout() {
  return (
    <PaperProvider theme={appTheme}>
      <GroceryProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </GroceryProvider>
    </PaperProvider>
  );
}
