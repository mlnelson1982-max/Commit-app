export type NearbyPlace = {
  id: string;
  name: string;
  city: string;
  section: 'Vegan Restaurants' | 'Health Food Stores' | 'Organic Grocers';
  distance: string;
  rating: number;
  open: boolean;
  address: string;
  hours: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  { id: 'n1', name: 'Green Fork Kitchen', city: 'Austin', section: 'Vegan Restaurants', distance: '1.1 mi', rating: 4.8, open: true, address: '212 Cedar St, Austin, TX', hours: '8am - 9pm' },
  { id: 'n2', name: 'Plant Plate Co.', city: 'Austin', section: 'Vegan Restaurants', distance: '2.0 mi', rating: 4.6, open: false, address: '88 South Lamar Blvd, Austin, TX', hours: '11am - 10pm' },
  { id: 'n3', name: 'Sprout Wellness Market', city: 'Austin', section: 'Health Food Stores', distance: '1.8 mi', rating: 4.5, open: true, address: '401 West Ave, Austin, TX', hours: '7am - 8pm' },
  { id: 'n4', name: 'Rooted Nutrition Hub', city: 'Denver', section: 'Health Food Stores', distance: '0.9 mi', rating: 4.7, open: true, address: '13 Blake St, Denver, CO', hours: '7am - 7pm' },
  { id: 'n5', name: 'Harvest Organic', city: 'Denver', section: 'Organic Grocers', distance: '1.5 mi', rating: 4.4, open: false, address: '730 Logan St, Denver, CO', hours: '9am - 9pm' },
  { id: 'n6', name: 'Verdant Vegan Cafe', city: 'Seattle', section: 'Vegan Restaurants', distance: '1.3 mi', rating: 4.9, open: true, address: '19 Pine Ave, Seattle, WA', hours: '9am - 8pm' },
  { id: 'n7', name: 'Whole Harvest Organics', city: 'Seattle', section: 'Organic Grocers', distance: '2.2 mi', rating: 4.6, open: true, address: '200 6th Ave, Seattle, WA', hours: '8am - 10pm' },
  { id: 'n8', name: 'Natural Pantry Market', city: 'Miami', section: 'Organic Grocers', distance: '0.7 mi', rating: 4.3, open: true, address: '50 Ocean Dr, Miami, FL', hours: '8am - 8pm' },
  { id: 'n9', name: 'Pulse Health Foods', city: 'Miami', section: 'Health Food Stores', distance: '1.0 mi', rating: 4.5, open: false, address: '120 Brickell Ave, Miami, FL', hours: '10am - 6pm' }
];
