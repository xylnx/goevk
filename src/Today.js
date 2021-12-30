import { useState, useEffect } from "react";
import Event from "./Event";
import convertDates from "./getDateDetails";

const Today = () => {
  const [events, setEvents] = useState(null);

  // local redis:
  // const API_URL = "http://139.177.178.43/events.json";
  // heroku api
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  const getEvents = () => {
    // define criteria to filter for
    const date = new Date();
    const today = {
      month: date.getMonth(),
      day: date.getDate(),
      time: `${date.getHours()}:${date.getMinutes()}`,
    };

    // Fetch JSON from API containing events info
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

        console.log("ALL EVENTS LOADED:", eventsArr);
        console.log("CURRENT TIME:", today);

        // Filter events to find todays events
        eventsArr.forEach((event) => {
          if (
            event.dateDetails.month === today.month &&
            event.dateDetails.day === today.day &&
            event.dateDetails.time >= today.time
          ) {
            todaysEvents.push(event);
          }
        });
        console.log("TODAYS EVENTS:", todaysEvents);
        setEvents(todaysEvents);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="events">
      {/*<h1 style = {{ color: '#fff' }}>EVENTS:</h1> */}
      {events && <Event event={events} />}
    </div>
  );
};

export default Today;
