import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { filterTypes } from '../filters/filterTypes';

// CUSTOM HOOKS
import useFetch from '../hooks/useFetch';

// COMPONENTS
import { Event } from './Event';
import EventsNone from './EventsNone';

// API ENDPOINTS
// const localEndpoint = 'http://localhost:5033/events.json';
const localEndpoint = 'http://localhost:3000/events';
const apiEndpoint = 'https://sleepy-crag-13951.herokuapp.com/bvents.json';

// TRANSITIONS
// add a smoother transition when changing filters
const viewTransition = () => {
  const eventList = document.querySelector('.event-list');
  eventList.classList.add('viewTrans');
  setTimeout(removeTrans, 600);
};

// remove transition class
function removeTrans() {
  const eventList = document.querySelector('.event-list');
  eventList.classList.remove('viewTrans');
}

export const EventList = ({ filter, routeProps }) => {
  const url =
    process.env.NODE_ENV === 'development' ? localEndpoint : apiEndpoint;

  const [today, setToday] = useState(true);
  const [events, setEvents] = useState(null);
  const [fe, setFe] = useState(null); // Filtered events
  const { data, pending } = useFetch(url);

  const { search } = useLocation();

  useEffect(() => {
    viewTransition();
    setEvents(filter(data));
    filter.name === 'FilterToday' ? setToday(true) : setToday(false);
  }, [data, filter]);

  useEffect(() => {
    viewTransition();
    const queryParams = new URLSearchParams(search);
    const query = queryParams.getAll('type');
    console.log(query);
    setFe(filterTypes(events, query));
  }, [events, search]);

  return (
    <>
      <div className="event-list">
        {/* today's events */}
        {fe &&
          fe.map((event, index) => (
            <Event
              key={index}
              event={event}
              index={index}
              slug={routeProps.location.pathname}
            />
          ))}
        {/* no events */}
        {!events && (
          <EventsNone today={today} setToday={setToday} pending={pending} />
        )}
      </div>
    </>
  );
};
