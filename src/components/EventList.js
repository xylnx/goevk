import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

// Components
import { ButtonNav } from "./ButtonNav";
import Event from "./Event";
import EventsNone from "./EventsNone";

const EventList = ({ filter }) => {
  const initialURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5033/events.json"
      : "https://sleepy-crag-13951.herokuapp.com/bvents.json";

  const [today, setToday] = useState(true);
  // const [url, setUrl] = useState(initialURL);
  const url = initialURL;
  const [events, setEvents] = useState(null);
  const { data, pending } = useFetch(url);

  // add smoother transition when changing views
  const viewTransition = () => {
    const eventList = document.querySelector(".event-list");
    eventList.classList.add("viewTrans");
    setTimeout(removeTrans, 600);
  };

  function removeTrans() {
    const eventList = document.querySelector(".event-list");
    eventList.classList.remove("viewTrans");
  }

  const handleBtnClick = () => {
    viewTransition();
  };

  useEffect(() => {
    setEvents(filter(data));
    filter.name == "FilterToday" ? setToday(true) : setToday(false);

    viewTransition();
  }, [data, filter]);

  console.log(today);
  return (
    <>
      <ButtonNav
        todayP={today}
        setToday={setToday}
        handleBtnClick={handleBtnClick}
      />
      <div className="event-list">
        {/* today's events */}
        {events &&
          events.map((event, index) => {
            return <Event event={event} index={index} />;
          })}
        {/* no events */}
        {!events && (
          <EventsNone today={today} setToday={setToday} pending={pending} />
        )}
      </div>
    </>
  );
};

export default EventList;
