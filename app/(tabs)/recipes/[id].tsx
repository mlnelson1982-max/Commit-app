import { useLocalSearchParams, router } from 'expo-router';
import { ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { recipes } from '@/data/recipes';
import { useGrocery } from '@/context/GroceryContext';

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItems } = useGrocery();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return <ScrollView contentContainerStyle={{ padding: 16 }}><Text>Recipe not found.</Text></ScrollView>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Button mode="text" onPress={() => router.back()}>Back</Button>
      <Card>
        <Card.Content style={{ gap: 10 }}>
          <Text variant="headlineSmall">{recipe.name}</Text>
          <Text>{recipe.time}</Text>
          <Text variant="titleSmall">Ingredients</Text>
          {recipe.ingredients.map((ingredient) => <Text key={ingredient}>• {ingredient}</Text>)}
          <Text variant="titleSmall">Steps</Text>
          {recipe.steps.map((step, index) => <Text key={step}>{index + 1}. {step}</Text>)}
          <Text variant="titleSmall">Why this works</Text>
          <Text>{recipe.whyThisWorks}</Text>
          <Button mode="contained" onPress={() => addItems(recipe.ingredients)}>Add to Grocery List</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
