import { useState, useEffect } from "react";

const getCurrentDateInfo = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}`,
  };
};

const FilterToday = async (events) => {
  const [todaysEvents, setTodaysEvents] = useState(null);
  const today = getCurrentDateInfo();
  const filteredEvents = [];
  if (events) {
    events.forEach((event) => {
      if (
        event.dateDetails.month === today.month &&
        event.dateDetails.day === today.day &&
        event.dateDetails.time >= today.time
      )
        filteredEvents.push(event);
    });
    setTodaysEvents(filteredEvents);
    return { todaysEvents };
  }
  return [];
};

export { FilterToday };
