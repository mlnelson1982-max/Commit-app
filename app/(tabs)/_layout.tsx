import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

export default function TabsLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.outline },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIcon: ({ color, size }) => {
          const iconName: Record<string, keyof typeof Ionicons.glyphMap> = {
            home: 'walk',
            fasting: 'timer',
            recipes: 'restaurant',
            nearby: 'location'
          };
          return <Ionicons name={iconName[route.name] || 'ellipse'} size={size} color={color} />;
        }
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="fasting" options={{ title: 'Fasting' }} />
      <Tabs.Screen name="recipes" options={{ title: 'Recipes' }} />
      <Tabs.Screen name="nearby" options={{ title: 'Nearby' }} />
    </Tabs>
  );
}
