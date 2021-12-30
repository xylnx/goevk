import { useState, useEffect } from "react";
import Event from "./Event";
import convertDates from "./getDateDetails";

// import eventsJSON from "./events.json";

const EventsAll = () => {
  const [events, setEvents] = useState(null);
  // setEvents(convertDates(eventsJSON));
  // eventsJSON.forEach((el) => console.log(el));
  // const buildEvents = () => setEvents(convertDates(eventsJSON));

  // const API_URL = "http://139.177.178.43/events.json";
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";
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
      .then((data) => setEvents(convertDates(data)));
    // .then(data => setEvents(data.data))
  }

  useEffect(() => {
    getEvents();
    // buildEvents();
  }, []);

  return (
    <div className="events">
      {/*<h1 style = {{ color: '#fff' }}>EVENTS:</h1> */}
      {events && <Event event={events} />}
    </div>
  );
};

export default EventsAll;
