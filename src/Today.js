import { useState, useEffect } from "react";
import Event from "./Event";
import convertDates from "./getDateDetails";

import eventsJSON from "./events.json";

const Today = () => {
  const API_URL = "http://localhost:8000/api/events/today";

  const [events, setEvents] = useState(null);

  const buildEvents = async () => {
    const date = new Date();
    const today = {
      month: date.getMonth(),
      day: date.getDate(),
    };
    const allEvents = await convertDates(eventsJSON);

    setEvents(allEvents);
    setEvents(
      allEvents.filter((event) => {
        return (
          event.dateDetails.month === today.month &&
          event.dateDetails.day === today.day
        );
      })
    );
  };

  async function getEvents() {
    fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      // convertDates adds a property called 'dateDetails' to each event obj
      // dateDetails provides info necessery when rendering events
      .then((data) => setEvents(convertDates(data.data)));
    // .then(data => setEvents(data.data))
  }

  useEffect(() => {
    // getEvents();
    buildEvents();
  }, []);

  return (
    <div className="events">
      {/*<h1 style = {{ color: '#fff' }}>EVENTS:</h1> */}
      {events && <Event event={events} />}
    </div>
  );
};

export default Today;
