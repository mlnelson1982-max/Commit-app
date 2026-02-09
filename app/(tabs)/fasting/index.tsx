import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Chip, Text, Card } from 'react-native-paper';
import { router } from 'expo-router';
import { fastingMethods } from '@/data/fastingMethods';
import { EmptyState, ErrorState, LoadingState } from '@/components/StateView';

export default function FastingScreen() {
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text variant="headlineSmall">Fasting Methods</Text>
      {loading && <LoadingState label="Loading fasting guides..." />}
      {error && <ErrorState label={error} />}
      {!loading && !error && fastingMethods.length === 0 && <EmptyState label="No fasting methods available." />}
      {!loading && !error && fastingMethods.map((method) => (
        <Card key={method.id} onPress={() => router.push(`/(tabs)/fasting/${method.id}`)}>
          <Card.Content style={{ gap: 8 }}>
            <Text variant="titleLarge">{method.title}</Text>
            <Chip compact>{method.tag}</Chip>
            <Text>{method.howItWorks}</Text>
            <Text>Benefits:</Text>
            {method.benefits.map((benefit) => <Text key={benefit}>• {benefit}</Text>)}
            <Text>Best for: {method.bestFor}</Text>
            <Text>Caution: {method.caution}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
