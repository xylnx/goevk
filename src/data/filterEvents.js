const getCurrentDateInfo = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}`,
  };
};

/* TODAY's EVENTS */
const filterTodaysEvents = ({ eventsArr, setEvents }) => {
  const today = getCurrentDateInfo();
  const todaysEvents = [];

  // Filter events to find todays events
  // AND not show expired events => today.time check
  eventsArr.forEach((event) => {
    if (
      event.dateDetails.month === today.month &&
      event.dateDetails.day === today.day &&
      event.dateDetails.time >= today.time
    ) {
      todaysEvents.push(event);
    }
  });
  return todaysEvents;
};

/* ALL EVENTS */
const filterAllEvents = ({ eventsArr, setEvents }) => {
  const today = getCurrentDateInfo();
  const allEvents = [];

  // Filter events to not show expired events
  eventsArr.forEach((event) => {
    if (
      event.dateDetails.day === today.day &&
      event.dateDetails.time <= today.time
    )
      return;
    if (
      event.dateDetails.month >= today.month &&
      event.dateDetails.day >= today.day
    )
      allEvents.push(event);
  });
  setEvents(allEvents);
};

export { filterTodaysEvents, filterAllEvents };
