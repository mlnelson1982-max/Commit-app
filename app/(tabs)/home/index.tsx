import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, ProgressBar, SegmentedButtons, Switch, Text, TextInput } from 'react-native-paper';
import { calculatePlan, Pace } from '@/utils/calculator';

export default function HomeScreen() {
  const [currentWeight, setCurrentWeight] = useState('190');
  const [goalWeight, setGoalWeight] = useState('170');
  const [poundsToLose, setPoundsToLose] = useState('20');
  const [useGoalMode, setUseGoalMode] = useState(true);
  const [pace, setPace] = useState<Pace>('Steady');
  const [includeFoodChanges, setIncludeFoodChanges] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculatePlan> | null>(null);

  const computedPounds = useMemo(() => {
    if (!useGoalMode) return Number(poundsToLose) || 0;
    return Math.max(0, (Number(currentWeight) || 0) - (Number(goalWeight) || 0));
  }, [currentWeight, goalWeight, poundsToLose, useGoalMode]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <View style={{ marginTop: 18 }}>
        <Text variant="headlineMedium" style={{ fontWeight: '700' }}>Commit+</Text>
        <Text variant="titleSmall">Commit to a better you</Text>
      </View>

      <Card>
        <Card.Content style={{ gap: 12 }}>
          <Text variant="titleMedium">Steps & Timeline Calculator</Text>
          <TextInput label="Current Weight (lb)" keyboardType="numeric" value={currentWeight} onChangeText={setCurrentWeight} />
          <SegmentedButtons
            value={useGoalMode ? 'goal' : 'pounds'}
            onValueChange={(v) => setUseGoalMode(v === 'goal')}
            buttons={[{ value: 'goal', label: 'Goal Weight' }, { value: 'pounds', label: 'Pounds to Lose' }]}
          />
          {useGoalMode ? (
            <TextInput label="Goal Weight (lb)" keyboardType="numeric" value={goalWeight} onChangeText={setGoalWeight} />
          ) : (
            <TextInput label="Pounds to Lose" keyboardType="numeric" value={poundsToLose} onChangeText={setPoundsToLose} />
          )}
          <SegmentedButtons
            value={pace}
            onValueChange={(v) => setPace(v as Pace)}
            buttons={[{ value: 'Chill', label: 'Chill' }, { value: 'Steady', label: 'Steady' }, { value: 'Fast', label: 'Fast' }]}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>I will also change food intake</Text>
            <Switch value={includeFoodChanges} onValueChange={setIncludeFoodChanges} />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button mode="contained" onPress={() => setResult(calculatePlan({ poundsToLose: computedPounds || 1, pace, includeFoodChanges }))}>Calculate</Button>
            <Button mode="outlined" onPress={() => { setResult(null); setCurrentWeight('190'); setGoalWeight('170'); setPoundsToLose('20'); setPace('Steady'); setIncludeFoodChanges(false); }}>Reset</Button>
          </View>
        </Card.Content>
      </Card>

      {result && (
        <Card>
          <Card.Content style={{ gap: 10 }}>
            <Text variant="titleMedium">Plan Results</Text>
            <Text variant="displaySmall" style={{ fontWeight: '700' }}>{result.dailyStepTarget.toLocaleString()} steps/day</Text>
            <Text>Timeline: {result.weeks} weeks · Target date {result.targetDate}</Text>
            {includeFoodChanges && <Text>Daily split: {result.deficitFromSteps} kcal from steps + {result.deficitFromFood} kcal from food.</Text>}
            <Text>Today action: {result.todayAction}</Text>
            <Text variant="labelLarge">Progress today: 6,400 / {result.dailyStepTarget.toLocaleString()}</Text>
            <ProgressBar progress={Math.min(1, 6400 / result.dailyStepTarget)} />
            <Text variant="bodySmall">Estimates vary by person.</Text>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}
