import { useState, useEffect } from "react";
import Event from "./Event";
import fetchEvents from "./data/fetchEvents";

// TESTING
// import { prepareLocalEventObjs } from "./testing/Data";

const EventsAll = () => {
  const [events, setEvents] = useState(null);
  const viewName = "all";

  // local test data:
  // const API_URL = "http://localhost:5000/events.json";

  // heroku api (redis endpoint)
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  useEffect(() => {
    fetchEvents({ API_URL, setEvents, viewName });
    // prepareLocalEventObjs({ setEvents });
  }, []);

  /* prettier-ignore */
  return (
    <div className="events">
      {events && <Event event={events} />}
    </div>
  );
};

export default EventsAll;
