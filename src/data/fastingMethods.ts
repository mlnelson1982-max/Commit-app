export type FastingMethod = {
  id: string;
  title: string;
  tag: 'Beginner' | 'Popular' | 'Advanced';
  howItWorks: string;
  benefits: string[];
  bestFor: string;
  caution: string;
  details: string;
};

export const fastingMethods: FastingMethod[] = [
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
