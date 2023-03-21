export const convertTimeToPercentage = (time: Date): number => {
  const hours = time.getHours();

  if (hours <= 6) {
    return 0;
  };

  if (hours >= 18) {
    return 100;
  };

  const percentage = ((hours - 6) / 12) * 100;
  return percentage;
};