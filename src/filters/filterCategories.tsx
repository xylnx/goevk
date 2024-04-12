import { GRawEvent, GEventCategories } from '@/types';

export const filterCategories = (
  events: GRawEvent[],
  query: GEventCategories[],
) => {
  if (!events) return;

  // Return all events if there is no query
  if (!query || query?.length === 0) return events;

  try {
    // Return all events that match the current query
    const re = new RegExp(query.join('|'));
    return events.filter((event) => re.test(event.type));
  } catch (error) {
    console.error(error);
  }
};
