import { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Searchbar, Text } from 'react-native-paper';
import { router } from 'expo-router';
import { nearbyPlaces } from '@/data/nearbyPlaces';

const sections = ['Vegan Restaurants', 'Health Food Stores', 'Organic Grocers'] as const;

export default function NearbyScreen() {
  const [allowedLocation, setAllowedLocation] = useState(false);
  const [city, setCity] = useState('');

  const filtered = useMemo(() => nearbyPlaces.filter((place) => place.city.toLowerCase().includes(city.toLowerCase())), [city]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text variant="headlineSmall">Nearby Healthy Spots</Text>
      <Card>
        <Card.Content style={{ gap: 8 }}>
          <Text>Location permission: {allowedLocation ? 'Granted' : 'Not granted'}</Text>
          <Button mode={allowedLocation ? 'outlined' : 'contained'} onPress={() => setAllowedLocation((prev) => !prev)}>
            {allowedLocation ? 'Revoke (Mock)' : 'Allow Location (Mock)'}
          </Button>
        </Card.Content>
      </Card>
      <Searchbar placeholder="Search city" value={city} onChangeText={setCity} />
      {sections.map((section) => (
        <Card key={section}>
          <Card.Content style={{ gap: 8 }}>
            <Text variant="titleLarge">{section}</Text>
            {filtered.filter((item) => item.section === section).map((item) => (
              <Card key={item.id} mode="contained" onPress={() => router.push(`/(tabs)/nearby/${item.id}`)}>
                <Card.Content>
                  <Text variant="titleMedium">{item.name}</Text>
                  <Text>{item.distance} · ⭐ {item.rating} · {item.open ? 'Open' : 'Closed'}</Text>
                  <Text>{item.city}</Text>
                </Card.Content>
              </Card>
            ))}
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
