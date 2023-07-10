import { Duration } from "luxon";

export const calculateMedian = (timesInSeconds: number[]): number | undefined => {
  if (timesInSeconds.length === 0) {
    return undefined;
  }
  const sortedTimes = [...timesInSeconds].sort((a, b) => b - a);

  const half = Math.floor(sortedTimes.length / 2);

  if (sortedTimes.length % 2) {
    return sortedTimes[half];
  }
  return Math.floor((sortedTimes[half - 1] + sortedTimes[half]) / 2);
};

export const secondsToHms = (seconds: number): string => {
  return Duration.fromObject({ seconds: seconds }).toFormat("h:mm:ss");
};

export const hmsToSeconds = (hmsString: string): number => {
  const [hours, minutes, seconds] = hmsString.split(":").map(Number);
  const duration = Duration.fromObject({ hours, minutes, seconds });
  return duration.as("seconds");
};
