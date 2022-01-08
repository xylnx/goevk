import { useState, useEffect } from "react";
import Event from "./Event";
import EventsNone from "./components/EventsNone";

import fetchEvents from "./data/fetchEvents";

// Set production mode

const Today = () => {
  const [events, setEvents] = useState([]);
  const viewName = "today";

  // heroku api (redis endpoint)
  // const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  // Local test data
  const API_URL = "http://localhost:3002/data";

  useEffect(() => {
    fetchEvents({ API_URL, setEvents, viewName });
  }, []);

  return (
    <div className="events">
      {events && <Event event={events} />}
      {!events[0] && <EventsNone />}
    </div>
  );
};

export default Today;
