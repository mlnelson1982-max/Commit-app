import { useLocalSearchParams, router } from 'expo-router';
import { Linking, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { nearbyPlaces } from '@/data/nearbyPlaces';

export default function NearbyDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = nearbyPlaces.find((place) => place.id === id);

  if (!item) {
    return <ScrollView contentContainerStyle={{ padding: 16 }}><Text>Location not found.</Text></ScrollView>;
  }

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Button mode="text" onPress={() => router.back()}>Back</Button>
      <Card>
        <Card.Content style={{ gap: 10 }}>
          <Text variant="headlineSmall">{item.name}</Text>
          <Text>{item.section}</Text>
          <Text>Address: {item.address}</Text>
          <Text>Hours: {item.hours}</Text>
          <Text>Rating: {item.rating}</Text>
          <Text>Status: {item.open ? 'Open now' : 'Closed now'}</Text>
          <Button mode="contained" onPress={() => Linking.openURL(directionsUrl)}>Directions</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
