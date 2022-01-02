import convertDates from "./../getDateDetails";
import { filterTodaysEvents, filterAllEvents } from "./../data/filterEvents";

const fetchEvents = ({ API_URL, setEvents, viewName }) => {
  // Fetch JSON from API => JSON containing event objects
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
      // convertDates enriches existing objects with date infos
      const eventsArr = convertDates(data);
      console.log("ALL EVENTS:", eventsArr);

      switch (viewName) {
        case "today":
          filterTodaysEvents({ eventsArr, setEvents });
          break;
        default:
          // allEvents are filtert to not display expired events
          filterAllEvents({ eventsArr, setEvents });
          break;
      }
    });
};

export default fetchEvents;
