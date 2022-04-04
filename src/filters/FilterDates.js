const getCurrentDateInfo = () => {
  const date = new Date();
  /*
  return {
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
  };
  */
  return date;
};

const FilterToday = (events) => {
  console.log(events);
  const today = getCurrentDateInfo();
  const todaysEvents = [];
  if (events) {
    events.forEach((event) => {
      const date = new Date(event.date);
      // console.log(date.getDay());
      if (
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate() &&
        date.getHours() >= today.getHours() - 2
      )
        todaysEvents.push(event);
    });
    // Return null, if array is empty
    if (!todaysEvents.length) return null;
    return todaysEvents;
  }
  return null;
};

const FilterAll = (events) => {
  const today = getCurrentDateInfo();
  const allEvents = [];
  if (events) {
    console.log(0);
    // Filter events to not show expired events
    events.forEach((event) => {
      // Event is this month => check if day is in the past
      if (
        event.dateDetails.month === today.month &&
        event.dateDetails.day < today.day
      ) {
        // Do not push it into allEvents
        console.log(1);
        return;
      }
      if (
        // Event is today => check if start time is in the past
        event.dateDetails.day === today.day &&
        event.dateDetails.month === today.month
        // && event.dateDetails.time <= today.time
      ) {
        // Do not push it into allEvents
        return;
      }

      allEvents.push(event);
    });
    // Return null, if array is empty
    if (!allEvents.length) return null;
    return allEvents;
  }
  return null;
};

export { FilterToday, FilterAll };
