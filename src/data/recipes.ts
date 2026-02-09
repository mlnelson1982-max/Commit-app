export type RecipeTag = 'Vegan' | 'Gluten-free' | '5-Ingredients' | 'High Protein';

export type Recipe = {
  id: string;
  name: string;
  time: string;
  tags: RecipeTag[];
  ingredients: string[];
  steps: string[];
  whyThisWorks: string;
};

export const recipes: Recipe[] = [
  { id: '1', name: 'Chickpea Power Bowl', time: '20 min', tags: ['Vegan', 'High Protein'], ingredients: ['1 cup chickpeas', '2 cups spinach', '1/2 avocado', 'Lemon tahini'], steps: ['Rinse chickpeas.', 'Sauté spinach lightly.', 'Assemble bowl and drizzle dressing.'], whyThisWorks: 'Fiber + plant protein keeps you full and steady.' },
  { id: '2', name: 'Green Lentil Chili', time: '35 min', tags: ['Vegan', 'Gluten-free', 'High Protein'], ingredients: ['1 cup lentils', 'Tomatoes', 'Onion', 'Bell pepper', 'Chili spice'], steps: ['Cook onions and peppers.', 'Add lentils, tomatoes, and spices.', 'Simmer until tender.'], whyThisWorks: 'High satiety and nutrient-dense for fat-loss phases.' },
  { id: '3', name: 'Tofu Veggie Scramble', time: '15 min', tags: ['Vegan', '5-Ingredients', 'High Protein'], ingredients: ['Firm tofu', 'Turmeric', 'Spinach', 'Tomato', 'Olive oil'], steps: ['Crumble tofu.', 'Cook with spices and veggies.', 'Serve hot.'], whyThisWorks: 'Quick protein-focused meal with minimal prep.' },
  { id: '4', name: 'Overnight Oats + Chia', time: '10 min prep', tags: ['Vegan', 'Gluten-free'], ingredients: ['Rolled oats', 'Chia seeds', 'Almond milk', 'Berries'], steps: ['Mix ingredients in jar.', 'Refrigerate overnight.', 'Top with berries.'], whyThisWorks: 'Slow carbs and fiber support appetite control.' },
  { id: '5', name: 'Black Bean Lettuce Wraps', time: '18 min', tags: ['Vegan', 'Gluten-free', '5-Ingredients'], ingredients: ['Black beans', 'Lettuce', 'Salsa', 'Corn', 'Lime'], steps: ['Warm beans and corn.', 'Fill lettuce cups.', 'Top with salsa and lime.'], whyThisWorks: 'Low-calorie volume meal that still feels hearty.' },
  { id: '6', name: 'Quinoa Edamame Salad', time: '22 min', tags: ['Vegan', 'Gluten-free', 'High Protein'], ingredients: ['Quinoa', 'Edamame', 'Cucumber', 'Mint', 'Lemon'], steps: ['Cook quinoa.', 'Mix with veggies and edamame.', 'Dress with lemon and mint.'], whyThisWorks: 'Balanced macros and refreshing for meal prep.' },
  { id: '7', name: 'Sweet Potato Bean Tacos', time: '30 min', tags: ['Vegan'], ingredients: ['Sweet potato', 'Black beans', 'Corn tortillas', 'Cabbage', 'Avocado'], steps: ['Roast sweet potato.', 'Warm beans and tortillas.', 'Assemble tacos.'], whyThisWorks: 'Satisfying carbs help maintain consistency.' },
  { id: '8', name: 'Cauliflower Stir-Fry', time: '20 min', tags: ['Vegan', 'Gluten-free', '5-Ingredients'], ingredients: ['Cauliflower rice', 'Peas', 'Carrots', 'Tamari', 'Sesame oil'], steps: ['Sauté vegetables.', 'Add cauliflower rice.', 'Season and stir-fry.'], whyThisWorks: 'Low-calorie, high-volume dinner option.' },
  { id: '9', name: 'Protein Smoothie Bowl', time: '8 min', tags: ['Vegan', 'High Protein'], ingredients: ['Plant protein powder', 'Frozen banana', 'Spinach', 'Flaxseed', 'Water'], steps: ['Blend all ingredients.', 'Serve thick in bowl.', 'Top with seeds.'], whyThisWorks: 'Great when appetite is low but protein target matters.' },
  { id: '10', name: 'Mediterranean Hummus Plate', time: '12 min', tags: ['Vegan', '5-Ingredients'], ingredients: ['Hummus', 'Cucumber', 'Tomato', 'Olives', 'Carrots'], steps: ['Slice vegetables.', 'Plate around hummus.', 'Season with herbs.'], whyThisWorks: 'Easy snack-meal that reduces impulsive choices.' },
  { id: '11', name: 'Tempeh Peanut Noodles', time: '25 min', tags: ['Vegan', 'High Protein'], ingredients: ['Rice noodles', 'Tempeh', 'Peanut butter', 'Soy sauce', 'Lime'], steps: ['Cook noodles.', 'Pan-sear tempeh.', 'Toss with sauce and lime.'], whyThisWorks: 'Protein + flavor improves long-term adherence.' },
  { id: '12', name: 'Miso Soup with Tofu', time: '18 min', tags: ['Vegan', 'Gluten-free'], ingredients: ['Miso paste', 'Tofu', 'Mushrooms', 'Scallions', 'Seaweed'], steps: ['Heat water and dissolve miso.', 'Add tofu and mushrooms.', 'Finish with scallions.'], whyThisWorks: 'Warm, low-calorie, and comforting for evening hunger.' }
];
