const getCurrentDateInfo = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}`,
  };
};

const FilterToday = (events) => {
  const today = getCurrentDateInfo();
  const todaysEvents = [];
  if (events) {
    events.forEach((event) => {
      if (
        event.dateDetails.month === today.month &&
        event.dateDetails.day === today.day &&
        event.dateDetails.time >= today.time
      )
        todaysEvents.push(event);
    });
    // Return null, if array is empty
    if (!todaysEvents.length) return null;
    return todaysEvents;
  }
  return null;
};

export { FilterToday };
