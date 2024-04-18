import type { GEvent, GLocation } from '@/types';

export function filterLocations(events: GEvent[], query: GLocation[]) {
  if (!events.length) return events;
  if (!query.length) return events;

  console.log(arguments);
  try {
    const evs = events.filter((e) => query.includes(e.place));

    console.log(evs);
    return evs;
  } catch (error) {
    console.log(error);
    return events;
  }
}
