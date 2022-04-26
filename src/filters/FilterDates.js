// Define how long after it's starting time an event will still be displayed
const timeOffset = 2;
// Return an object with info on the current time
const getCurrentDateInfo = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
  };
};

const FilterToday = (events) => {
  const todaysEvents = [];
  const today = getCurrentDateInfo();
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      // console.log(date.getDay());
      if (
        eventDate.getMonth() === today.month &&
        eventDate.getDate() === today.date &&
        eventDate.getHours() >= today.hours - timeOffset
      )
        todaysEvents.push(event);
    });
    // Return null, if array is empty
    if (!todaysEvents.length) return null;
    return todaysEvents;
  }
  return null;
};

const FilterTomorrow = (events) => {
  const todaysEvents = [];
  const today = getCurrentDateInfo();
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      // console.log(date.getDay());
      if (
        eventDate.getMonth() === today.month &&
        eventDate.getDate() === today.date + 1
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
  const allEvents = [];
  const today = getCurrentDateInfo();
  if (events) {
    // Filter events to not show expired events
    events.forEach((event) => {
      const eventDate = new Date(event.date);

      if (
        eventDate.getMonth() === today.month && // Event is this month
        eventDate.getDate() < today.date // but, date is in the past
      ) {
        return;
      }
      if (
        eventDate.getMonth() === today.month && // The month is this month
        eventDate.getDate() === today.date && // The day is today
        eventDate.getHours() <= today.hours - timeOffset // but, the event already started (- offset)
      ) {
        return;
      }
      // The event is today and did n
      allEvents.push(event);
    });
    // Return null, if array is empty
    if (!allEvents.length) return null;
    return allEvents;
  }
  return null;
};

export { FilterToday, FilterTomorrow, FilterAll };
