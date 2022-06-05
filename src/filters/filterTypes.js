export const filterTypes = (events, query) => {
  // Return if there are no events
  if (!events) return;
  // Return all events if there is no query
  if (!query || query?.length === 0) return events;
  try {
    // const fe = events.filter((event) => event.place === 'Musa');
    const re = new RegExp(query.join('|'));
    const fe = events.filter((event) => {
      return re.test(event.type);
    });
    return fe;
  } catch (error) {
    console.error(error);
  }
};
