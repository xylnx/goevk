import { useState, useEffect } from "react";
import Event from "./Event";
import EventsNone from "./EventsNone";
import convertDates from "./getDateDetails";

const testData = [
  {
    date: "2022-01-01T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/der-satanarchaeoluegenialkohoellische-wunschpunsch/",
    name: "Der satanarch\u00e4ol\u00fcgenialkoh\u00f6llische Wunschpunsch",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
  {
    date: "2022-01-01T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/der-satanarchaeoluegenialkohoellische-wunschpunsch/",
    name: "Der satanarch\u00e4ol\u00fcgenialkoh\u00f6llische Wunschpunsch",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
  {
    date: "2022-01-01T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/gewalt-und-leidenschaft/",
    name: "Gewalt und Leidenschaft",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
];

const Today = () => {
  console.log(testData);
  const [events, setEvents] = useState([]);

  // TESTING
  function prepareLocalEventObjs() {
    console.log("runing prep");
    const date = new Date();
    const today = {
      month: date.getMonth(),
      day: date.getDate(),
      time: `${date.getHours()}:${date.getMinutes()}`,
    };

    const eventsArr = convertDates(testData);
    const todaysEvents = [];

    console.log("ALL EVENTS:", eventsArr);
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
    console.log("TODAY'S EVENTS:", todaysEvents);
    setEvents(todaysEvents);
  }

  // local test data:
  // const API_URL = "http://localhost:5000/events.json";

  // heroku api (redis endpoint)
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

        console.log("ALL EVENTS:", eventsArr);
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
        console.log("TODAY'S EVENTS:", todaysEvents);
        setEvents(todaysEvents);
      });
  };

  useEffect(() => {
    getEvents();
    // prepareLocalEventObjs();
  }, []);

  //console.log(events[0]);
  return (
    <div className="events">
      {/*<h1 style = {{ color: '#fff' }}>EVENTS:</h1> */}
      {events && <Event event={events} />}
      {!events[0] && <EventsNone style={{ color: "red" }} />}
    </div>
  );
};

export default Today;
