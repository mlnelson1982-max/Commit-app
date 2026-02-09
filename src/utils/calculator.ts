export type Pace = 'Chill' | 'Steady' | 'Fast';

const kcalPerStep = 0.045;
const deficitByPace: Record<Pace, number> = { Chill: 250, Steady: 400, Fast: 600 };
const poundsByPace: Record<Pace, number> = { Chill: 0.5, Steady: 0.75, Fast: 1 };

export type CalculationInput = {
  poundsToLose: number;
  pace: Pace;
  includeFoodChanges: boolean;
};

export const calculatePlan = ({ poundsToLose, pace, includeFoodChanges }: CalculationInput) => {
  const totalDeficit = deficitByPace[pace];
  const deficitFromSteps = includeFoodChanges ? totalDeficit * 0.5 : totalDeficit;
  const deficitFromFood = includeFoodChanges ? totalDeficit * 0.5 : 0;
  const dailyStepTarget = Math.max(0, Math.round(deficitFromSteps / kcalPerStep / 100) * 100);

  const weeks = Math.max(1, Math.ceil(poundsToLose / poundsByPace[pace]));
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + weeks * 7);

  return {
    dailyStepTarget,
    weeks,
    targetDate: targetDate.toDateString(),
    deficitFromSteps,
    deficitFromFood,
    todayAction:
      pace === 'Fast' ? 'Add a 20-minute brisk walk after lunch.' : pace === 'Steady' ? 'Add a 12-minute walk this afternoon.' : 'Add a gentle 10-minute walk after dinner.'
  };
};
