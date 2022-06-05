export const filterTypes = (events) => {
  console.log({ events });
  try {
    const fe = events.filter((event) => event.place === 'Lumière');
    console.log({ fe });
  } catch (error) {
    console.log(error);
  }
  return events;
};
