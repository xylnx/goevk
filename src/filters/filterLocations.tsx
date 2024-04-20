import type { GEvent, GLocation } from '@/types';

export function filterLocations(events: GEvent[], query: GLocation[]) {
  if (!events.length) return events;
  if (!query.length) return events;

  try {
    return events.filter((e) => query.includes(e.place));
  } catch (error) {
    console.error(error);
    return events;
  }
}
