import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// CUSTOM HOOKS
import useFetch from '../hooks/useFetch';

// Custom functions
import { filterCategories } from '../filters/filterCategories'; // filter events according to its types
import { viewTransition } from '../helpers/viewTransition'; // show a fade in/out effect

// COMPONENTS
import { Event } from './Event';
import EventsNone from './EventsNone';
import { GEvent, GEventCategories } from '@/types';

// API ENDPOINTS
const apiEndpoint = 'https://api.goevk.de/events.json';
const localEndpoint = 'http://localhost:5033/events.json';

type Props = {
  filter: (events: GEvent[]) => GEvent[] 
}

export const EventList = ({ filter }: Props) => {
  const url =
    process.env.NODE_ENV === 'development' ? localEndpoint : apiEndpoint;

  // Today is drilled into `<EventsNone />` component
  // => used to display a button to all events (or not)
  const [today, setToday] = useState(true);

  const [events, setEvents] = useState<GEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<GEvent[]>([]); // Filtered events
  const { data, pending }: { data: GEvent[] | null, pending: boolean } = useFetch(url);

  const { search, pathname } = useLocation();

  useEffect(() => {
    setEvents(filter(data ?? []));
    filter.name === 'FilterToday' ? setToday(true) : setToday(false);
  }, [data, filter]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const query = queryParams.getAll('type') as GEventCategories[];
    console.log({ query })
    setFilteredEvents(filterCategories(events, query) as GEvent[]);
    viewTransition('.event-list');
  }, [events, search]);

  return (
    <>
      <div className="event-list">
        {/* today's events */}
        {filteredEvents &&
          filteredEvents.map((event, index) => (
            <Event key={index} event={event} slug={pathname} />
          ))}
        {/* no events */}
        {!events && (
          <EventsNone today={today} pending={pending} />
        )}
      </div>
    </>
  );
};
