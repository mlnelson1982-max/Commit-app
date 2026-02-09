const kcalPerStep = 0.045;
const deficitByPace = { Chill: 250, Steady: 400, Fast: 600 };
const poundsByPace = { Chill: 0.5, Steady: 0.75, Fast: 1 };

function calculatePlan({ poundsToLose, pace, includeFoodChanges }) {
  if (!deficitByPace[pace]) {
    throw new Error('Invalid pace. Use Chill, Steady, or Fast.');
  }

  const safePounds = Math.max(0, Number(poundsToLose) || 0);
  const totalDeficit = deficitByPace[pace];
  const deficitFromSteps = includeFoodChanges ? totalDeficit * 0.5 : totalDeficit;
  const deficitFromFood = includeFoodChanges ? totalDeficit * 0.5 : 0;
  const dailyStepTarget = Math.round(deficitFromSteps / kcalPerStep / 100) * 100;

  const paceLbPerWeek = poundsByPace[pace];
  const weeks = Math.max(1, Math.ceil(safePounds / paceLbPerWeek));
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + weeks * 7);

  const todayAction = pace === 'Fast'
    ? 'Add a 20-minute brisk walk after lunch.'
    : pace === 'Steady'
      ? 'Add a 12-minute walk this afternoon.'
      : 'Add a gentle 10-minute walk after dinner.';

  return {
    dailyStepTarget,
    timeline: {
      weeks,
      targetDate: targetDate.toISOString().slice(0, 10)
    },
    deficit: {
      total: totalDeficit,
      fromSteps: deficitFromSteps,
      fromFood: deficitFromFood
    },
    todayAction,
    disclaimer: 'Estimates vary by person.'
  };
}

module.exports = { calculatePlan };
