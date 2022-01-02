import { useState, useEffect } from "react";
import Event from "./Event";
import EventsNone from "./EventsNone";

import fetchEvents from "./data/fetchEvents";

// TESTING
// import { prepareLocalEventObjs } from "./testing/Data";

const Today = () => {
  const [events, setEvents] = useState([]);
  const viewName = "today";

  // local test data:
  // const API_URL = "http://localhost:5000/events.json";

  // heroku api (redis endpoint)
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  useEffect(() => {
    fetchEvents({ API_URL, setEvents, viewName });
    // prepareLocalEventObjs({ setEvents });
  }, []);

  return (
    <div className="events">
      {events && <Event event={events} />}
      {!events[0] && <EventsNone />}
    </div>
  );
};

export default Today;
