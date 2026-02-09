import { useLocalSearchParams, router } from 'expo-router';
import { ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { fastingMethods } from '@/data/fastingMethods';

export default function FastingDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const method = fastingMethods.find((item) => item.id === id);

  if (!method) {
    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text>Method not found.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Button mode="text" onPress={() => router.back()}>Back</Button>
      <Card>
        <Card.Content style={{ gap: 10 }}>
          <Text variant="headlineSmall">{method.title}</Text>
          <Text variant="titleMedium">{method.tag}</Text>
          <Text>{method.details}</Text>
          <Text variant="titleSmall">How it works</Text>
          <Text>{method.howItWorks}</Text>
          <Text variant="titleSmall">Benefits</Text>
          {method.benefits.map((benefit) => <Text key={benefit}>• {benefit}</Text>)}
          <Text>Best for: {method.bestFor}</Text>
          <Text>Caution: {method.caution}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
