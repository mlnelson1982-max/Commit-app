const fastingMethods = [
  {
    id: '12-12',
    title: '12:12',
    tag: 'Beginner',
    howItWorks: 'Fast for 12 hours and eat within a 12-hour window each day.',
    benefits: ['Easy to start', 'Supports routine', 'Helps reduce late-night snacking'],
    bestFor: 'Busy beginners building consistency.',
    caution: 'Do not under-eat during your eating window.',
    details: '12:12 is the easiest fasting pattern. Start by finishing dinner earlier and delay breakfast slightly.'
  },
  {
    id: '14-10',
    title: '14:10',
    tag: 'Beginner',
    howItWorks: 'Fast for 14 hours and eat during a 10-hour window.',
    benefits: ['Improves appetite control', 'Simple progression', 'Supports blood sugar balance'],
    bestFor: 'People who already skip late snacks.',
    caution: 'Hydrate well and keep meals nutrient dense.',
    details: '14:10 adds structure without feeling extreme and can fit social schedules.'
  },
  {
    id: '16-8',
    title: '16:8',
    tag: 'Popular',
    howItWorks: 'Fast 16 hours and eat all meals inside an 8-hour window.',
    benefits: ['Popular and flexible', 'May improve insulin response', 'Reduces mindless snacking'],
    bestFor: 'Most people aiming for fat loss.',
    caution: 'Avoid overeating ultra-processed foods in your eating window.',
    details: '16:8 is the most common protocol. Pair it with protein-rich, fiber-heavy meals for best results.'
  },
  {
    id: '18-6',
    title: '18:6',
    tag: 'Advanced',
    howItWorks: 'Fast for 18 hours and eat in a 6-hour window.',
    benefits: ['Stronger calorie control', 'Simplifies meal planning', 'Can increase metabolic flexibility'],
    bestFor: 'Experienced fasters wanting more structure.',
    caution: 'Not ideal for intense training days without planning.',
    details: '18:6 narrows the window more. Focus on two balanced meals and enough electrolytes.'
  },
  {
    id: '5-2',
    title: '5:2',
    tag: 'Popular',
    howItWorks: 'Eat normally 5 days/week and reduce intake on 2 non-consecutive days.',
    benefits: ['Weekly flexibility', 'No daily fasting window required', 'Can fit family routines'],
    bestFor: 'People who prefer weekly planning.',
    caution: 'Low-calorie days can affect energy and mood.',
    details: '5:2 works well when low-intake days are planned with simple, high-volume foods.'
  },
  {
    id: 'adf',
    title: 'ADF',
    tag: 'Advanced',
    howItWorks: 'Alternate between regular eating days and fasting or very low-calorie days.',
    benefits: ['Clear structure', 'Strong energy deficit potential', 'Can break weight-loss plateaus'],
    bestFor: 'Experienced users with coach guidance.',
    caution: 'Can be hard to sustain and not for everyone.',
    details: 'Alternate-day fasting can be effective but requires careful nutrition and recovery planning.'
  }
];

const recipes = [
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

const nearbyPlaces = [
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

module.exports = { fastingMethods, recipes, nearbyPlaces };
