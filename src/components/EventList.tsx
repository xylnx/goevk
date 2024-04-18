import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// CUSTOM HOOKS
import { useFetch } from '@/hooks/useFetch';

// Custom functions
import { filterCategories } from '../filters/filterCategories'; // filter events according to its types
import { viewTransition } from '../helpers/viewTransition'; // show a fade in/out effect

// COMPONENTS
import { Event } from './Event';
import EventsNone from './EventsNone';
import { GEvent, GRawEvent, GEventCategories } from '@/types';

// API
const apiEndpoint = `${import.meta.env.VITE_API_ROOT}/events`;

type Props = {
  filter: (events: GEvent[]) => GEvent[] 
}

export const EventList = ({ filter }: Props) => {
  // Today is drilled into `<EventsNone />` component
  // => used to display a button to all events (or not)
  const [today, setToday] = useState(true);

  const [events, setEvents] = useState<GEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<GEvent[]>([]); // Filtered events
  const { data, pending }: { data: GRawEvent[] | null, pending: boolean } = useFetch(apiEndpoint);

  const { search, pathname } = useLocation();

  useEffect(() => {
    if (!data) return;
    const enrichtedData = convertDates(data);
    setEvents(filter(enrichtedData ?? []));
  }, [data, filter]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const queryTypes = queryParams.getAll('type') as GEventCategories[];
    const queryLocations = queryParams.getAll('location') as GLocation[];

    setFilteredEvents(filterCategories(events, queryTypes) as GEvent[]);
    setFilteredEvents(
      (prev) => filterLocations(prev, queryLocations) as GEvent[],
    );
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
