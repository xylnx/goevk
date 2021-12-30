import { useState, useEffect } from "react";
import Event from "./Event";
import convertDates from "./getDateDetails";

// import eventsJSON from "./events.json";

const EventsAll = () => {
  const [events, setEvents] = useState(null);
  // setEvents(convertDates(eventsJSON));
  // eventsJSON.forEach((el) => console.log(el));
  // const buildEvents = () => setEvents(convertDates(eventsJSON));

  // Get data from redis
  const API_URL = "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  /* 
  const getEvents = () => {
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
  };
  */

  const getEvents = () => {
    // define criteria to filter for
    const date = new Date();
    const today = {
      month: date.getMonth(),
      day: date.getDate(),
      time: `${date.getHours()}:${date.getMinutes()}`,
      //time: "20:55",
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
        console.log("TODAYS EVENTS:", todaysEvents);
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
