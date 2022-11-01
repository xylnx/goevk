import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// CUSTOM HOOKS
import useFetch from '../hooks/useFetch';

// Custom functions
import { filterTypes } from '../filters/filterTypes'; // filter events according to its types
import { viewTransition } from '../helpers/viewTransition'; // show a fade in/out effect

// COMPONENTS
import { Event } from './Event';
import EventsNone from './EventsNone';

// API ENDPOINTS
const apiEndpoint = 'https://sleepy-crag-13951.herokuapp.com/bvents.json';
const localEndpoint = 'http://localhost:5033/events.json';

export const EventList = ({ filter }) => {
  const url =
    process.env.NODE_ENV === 'development' ? localEndpoint : apiEndpoint;

  // Today is drilled into `<EventsNone />` component
  // => used to display a button to all events (or not)
  const [today, setToday] = useState(true);

  const [events, setEvents] = useState(null);
  const [fe, setFe] = useState(null); // Filtered events
  const { data, pending } = useFetch(url);

  const { search, pathname } = useLocation();

  useEffect(() => {
    setEvents(filter(data));
    filter.name === 'FilterToday' ? setToday(true) : setToday(false);
  }, [data, filter]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const query = queryParams.getAll('type');
    setFe(filterTypes(events, query));
    viewTransition('.event-list');
  }, [events, search]);

  return (
    <>
      <div className="event-list">
        {/* today's events */}
        {fe &&
          fe.map((event, index) => (
            <Event key={index} event={event} index={index} slug={pathname} />
          ))}
        {/* no events */}
        {!events && (
          <EventsNone today={today} setToday={setToday} pending={pending} />
        )}
      </div>
    </>
  );
};
