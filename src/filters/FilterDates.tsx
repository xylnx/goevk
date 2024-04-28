import type { GEvent } from '@/types';

// Define how long after it's starting time an event will still be displayed
const timeOffset = 2; // hours

// Return an object with info on the current time
function getCurrentDateInfo() {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
  };
}

export function FilterToday(events: GEvent[]): GEvent[] {
  const todaysEvents: GEvent[] = [];
  const now = getCurrentDateInfo();
  if (events) {
    events.forEach((event) => {
      const eventDate = new Date(event.date);
      if (
        eventDate.getMonth() === now.month &&
        eventDate.getDate() === now.date &&
        eventDate.getHours() >= now.hours - timeOffset
      )
        todaysEvents.push(event);
    });
    if (!todaysEvents.length) return [];
    return todaysEvents;
  }
  return [];
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
    if (!todaysEvents.length) return [];
    return todaysEvents;
  }
  return [];
}

export function filterByStartAndEndDate(
  events: GEvent[] = [],
  startDate: Date | null,
  endDate: Date | null,
) {
  if (startDate && endDate) {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= startDate && eventDate <= endDate;
    });
  }

  if (startDate && !endDate) {
    return events.filter((event) => new Date(event.date) >= startDate);
  }

  if (!startDate && endDate) {
    return FilterAll(events.filter((event) => new Date(event.date) <= endDate));
  }
}

export function FilterAll(events: GEvent[]) {
  const allEvents: GEvent[] = [];

  if (events) {
    // Filter events to not show expired events
    const now = getCurrentDateInfo();
    events.forEach((event) => {
      const eventDate = new Date(event.date);

      // Get rid of events from last year
      if (eventDate.getFullYear() < now.year) return;

      if (
        // Get rid of events from last month
        eventDate.getFullYear() == now.year &&
        eventDate.getMonth() < now.month
      )
        return;

      if (
        // Get rid of events from yesterday
        eventDate.getMonth() == now.month &&
        eventDate.getDate() < now.date
      )
        return;

      if (
        // Get rid of events which started more than ${timeOffeset} hours ago
        eventDate.getDate() == now.date &&
        eventDate.getHours() < now.hours - timeOffset
      )
        return;

      allEvents.push(event);
    });

    if (!allEvents.length) return [];
    return allEvents;
  }
  return [];
}
