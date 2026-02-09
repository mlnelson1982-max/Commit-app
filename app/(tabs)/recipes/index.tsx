import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, Chip, Searchbar, Text } from 'react-native-paper';
import { router } from 'expo-router';
import { recipes, RecipeTag } from '@/data/recipes';

const filterTags: RecipeTag[] = ['Vegan', 'Gluten-free', '5-Ingredients', 'High Protein'];

export default function RecipesScreen() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<RecipeTag[]>(['Vegan']);

  const filtered = useMemo(() => {
    return recipes.filter((recipe) => {
      const byName = recipe.name.toLowerCase().includes(query.toLowerCase());
      const byTags = activeTags.every((tag) => recipe.tags.includes(tag));
      return byName && byTags;
    });
  }, [query, activeTags]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text variant="headlineSmall">All-Natural Vegan Recipes</Text>
      <Searchbar placeholder="Search recipes" value={query} onChangeText={setQuery} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {filterTags.map((tag) => (
          <Chip key={tag} selected={activeTags.includes(tag)} onPress={() => setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])}>{tag}</Chip>
        ))}
      </View>
      <Button mode="outlined" onPress={() => router.push('/(tabs)/recipes/grocery')}>View Grocery List</Button>
      {filtered.length === 0 && <Text>No recipes match this filter.</Text>}
      {filtered.map((recipe) => (
        <Card key={recipe.id} onPress={() => router.push(`/(tabs)/recipes/${recipe.id}`)}>
          <Card.Content style={{ gap: 6 }}>
            <Text variant="titleMedium">{recipe.name}</Text>
            <Text>{recipe.time}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {recipe.tags.map((tag) => <Chip key={tag} compact>{tag}</Chip>)}
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
