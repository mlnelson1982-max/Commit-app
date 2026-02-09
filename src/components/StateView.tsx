import { ActivityIndicator, Text } from 'react-native-paper';
import { View } from 'react-native';

export const LoadingState = ({ label = 'Loading...' }: { label?: string }) => (
  <View style={{ padding: 20, alignItems: 'center', gap: 8 }}>
    <ActivityIndicator />
    <Text>{label}</Text>
  </View>
);

export const EmptyState = ({ label }: { label: string }) => (
  <View style={{ padding: 20, alignItems: 'center' }}>
    <Text>{label}</Text>
  </View>
);

export const ErrorState = ({ label }: { label: string }) => (
  <View style={{ padding: 20, alignItems: 'center' }}>
    <Text style={{ color: '#ff8a8a' }}>{label}</Text>
  </View>
);
