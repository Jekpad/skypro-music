export function serializeTrackTime(time: string | number): string {
  let seconds: number;
  seconds = typeof time === "string" ? parseInt(time) : time;
  return Math.floor(seconds / 60) + ":" + (seconds % 60);
}
