import type { GEvent } from '@/types';

// Define how long after it's starting time an event will still be displayed
const timeOffset = 2; // hours

// Return an object with info on the current time
function getCurrentDateInfo() {
  const date = new Date();
  return {
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
  };
}

export function FilterToday(events: GEvent[]) {
  const todaysEvents: GEvent[] = [];
  const today = getCurrentDateInfo();
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
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
}

export function FilterTomorrow(events: GEvent[]) {
  const todaysEvents: GEvent[] = [];
  const today = getCurrentDateInfo();
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
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
}

export function FilterAll(events: GEvent[]) {
  const allEvents: GEvent[] = [];
  const today = new Date();

  if (events) {
    // Filter events to not show expired events
    events.forEach((event) => {
      const eventDate = new Date(event.date);

      if (today > eventDate) {
        return;
      }

      allEvents.push(event);
    });
    // Return null, if array is empty
    if (!allEvents.length) return null;
    return allEvents;
  }
  return null;
}
