export const formatSecondsToTime = (decimalTime: number) => {
  const minutes = Math.floor(decimalTime / 60);
  const seconds = Math.floor(decimalTime % 60);
  const milliseconds = Math.round(decimalTime * 1000) % 1000;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
};
