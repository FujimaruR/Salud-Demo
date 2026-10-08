export const specialistFor: Record<string, string[]>;
export function upcomingDates(now?: Date): string[];
export function availableSlots(
  date: string,
  doctor: string,
  dates?: string[],
): string[];
