import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

import { FilterToday, FilterAll } from '../filters/FilterDates';
import Event from './Event';
import EventsNone from './EventsNone';

const EventList = () => {
  const initialURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/events.json'
      : 'https://sleepy-crag-13951.herokuapp.com/bvents.json';

  const [today, setToday] = useState(true);
  // const [url, setUrl] = useState(initialURL);
  const url = initialURL;
  const [events, setEvents] = useState(null);
  const { data, pending } = useFetch(url);

  // add smoother transition when changing views
  const viewTransition = () => {
    const eventList = document.querySelector('.event-list');
    eventList.classList.add('viewTrans');
    setTimeout(removeTrans, 600);
  };

  function removeTrans() {
    const eventList = document.querySelector('.event-list');
    eventList.classList.remove('viewTrans');
  }

  const handleBtnClick = () => {
    viewTransition();
  };

  useEffect(() => {
    today ? setEvents(FilterToday(data)) : setEvents(FilterAll(data));
  }, [data, today]);

  return (
    <>
      <div className="buttons">
        <button
          className={`btn today ${today ? 'active' : ''}`}
          onClick={() => {
            setToday(true);
            handleBtnClick();
          }}
        >
          Heute
        </button>
        <button
          className={`btn all ${today ? '' : 'active'}`}
          onClick={() => {
            setToday(false);
            handleBtnClick();
          }}
        >
          Alle Veranstaltungen
        </button>
      </div>

      <div className="event-list">
        {/* today's events */}
        {today &&
          events &&
          events.map((event, index) => {
            return <Event event={event} index={index} />;
          })}

        {/* all events */}
        {!today &&
          events &&
          events.map((event, index) => {
            return <Event event={event} index={index} />;
          })}

        {/* no events at all */}
        {!events && (
          <EventsNone today={today} setToday={setToday} pending={pending} />
        )}
      </div>
    </>
  );
};

export default EventList;
