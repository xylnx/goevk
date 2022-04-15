import { useState, useEffect } from "react";

// Custom hooks
import useFetch from "../hooks/useFetch";

// Components
import { ButtonNav } from "./ButtonNav";
import { Event } from "./Event";
import EventsNone from "./EventsNone";

// add a smoother transition when changing filters
const viewTransition = () => {
  const eventList = document.querySelector(".event-list");
  eventList.classList.add("viewTrans");
  setTimeout(removeTrans, 600);
};

function removeTrans() {
  const eventList = document.querySelector(".event-list");
  eventList.classList.remove("viewTrans");
}

export const EventList = ({ filter }) => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5033/events.json"
      : "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  const [today, setToday] = useState(true);
  const [events, setEvents] = useState(null);
  const { data, pending } = useFetch(url);

  useEffect(() => {
    setEvents(filter(data));
    filter.name === "FilterToday" ? setToday(true) : setToday(false);
    viewTransition();
  }, [data, filter]);

  return (
    <>
      <ButtonNav />
      <div className="event-list">
        {/* today's events */}
        {events &&
          events.map((event, index) => (
            <Event key={index} event={event} index={index} />
          ))}
        {/* no events */}
        {!events && (
          <EventsNone today={today} setToday={setToday} pending={pending} />
        )}
      </div>
    </>
  );
};
