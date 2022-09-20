export const filterTypes = (events, query) => {
  // Return if there are no events
  if (!events) return;
  // Return all events if there is no query
  if (!query || query?.length === 0) return events;
  try {
    // Return all events that match the current query
    const re = new RegExp(query.join('|'));
    const fe = events.filter((event) => {
      return re.test(event.type);
    });
    return fe;
  } catch (error) {
    console.error(error);
  }
};
