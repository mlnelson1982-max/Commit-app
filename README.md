# Commit+ (Expo + React Native + Node backend)

## Run frontend
1. `npm install`
2. `npx expo start`

## Run backend
1. `npm run start:backend`
2. Backend base URL: `http://localhost:4000`

## Backend API
- `GET /health`
- `POST /api/calculate`
  - body: `{ "poundsToLose": 20, "pace": "Steady", "includeFoodChanges": true }`
- `GET /api/fasting-methods`
- `GET /api/fasting-methods/:id`
- `GET /api/recipes?search=tofu&tags=Vegan,High Protein`
- `GET /api/recipes/:id`
- `GET /api/grocery-list`
- `POST /api/grocery-list` body: `{ "items": ["Firm tofu", "Spinach"] }`
- `DELETE /api/grocery-list`
- `GET /api/nearby?city=Austin&section=Vegan Restaurants`
- `GET /api/nearby/:id`
- `GET /api/nearby/:id/directions`

## Structure
```
app/
  _layout.tsx
  index.tsx
  (tabs)/
    _layout.tsx
    home/
      _layout.tsx
      index.tsx
    fasting/
      _layout.tsx
      index.tsx
      [id].tsx
    recipes/
      _layout.tsx
      index.tsx
      [id].tsx
      grocery.tsx
    nearby/
      _layout.tsx
      index.tsx
      [id].tsx
backend/
  calculator.js
  data.js
  server.js
src/
  components/
    StateView.tsx
  constants/
    theme.ts
  context/
    GroceryContext.tsx
  data/
    fastingMethods.ts
    nearbyPlaces.ts
    recipes.ts
  utils/
    calculator.ts
```
