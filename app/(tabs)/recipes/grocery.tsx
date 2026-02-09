import { ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useGrocery } from '@/context/GroceryContext';

export default function GroceryScreen() {
  const { items, clearItems } = useGrocery();

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text variant="headlineSmall">Grocery List</Text>
      <Card>
        <Card.Content style={{ gap: 8 }}>
          {items.length === 0 ? <Text>No items yet. Add ingredients from a recipe.</Text> : items.map((item) => <Text key={item}>• {item}</Text>)}
          <Button mode="outlined" onPress={clearItems}>Clear List</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
