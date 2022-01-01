import { useState, useEffect } from "react";
import Event from "./Event";
import convertDates from "./getDateDetails";

const EventsAll = () => {
  const [events, setEvents] = useState(null);

  // local test data:
  // const API_URL = "http://localhost:5000/events.json";

  // heroku api (redis endpoint)
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  const getEvents = () => {
    // define criteria to filter events data for
    const date = new Date();
    const today = {
      month: date.getMonth(),
      day: date.getDate(),
      time: `${date.getHours()}:${date.getMinutes()}`,
      //time: "20:55",
    };

    // Fetch JSON from API containing events data
    fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        const eventsArr = convertDates(data);
        const todaysEvents = [];

        console.log("ALL EVENTS:", eventsArr);
        console.log("CURRENT TIME:", today);

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
            todaysEvents.push(event);
        });
        console.log("TODAY'S EVENTS:", todaysEvents);
        setEvents(todaysEvents);
      });
  };

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
