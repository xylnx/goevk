import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// CUSTOM HOOKS
import { useFetch } from '@/hooks/useFetch';

// Filters
import { filterCategories } from '@/filters/filterCategories'; // filter events according to its types
import { filterLocations } from '@/filters/filterLocations';
import { filterByStartAndEndDate } from '@/filters/FilterDates';

import { viewTransition } from '@/helpers/viewTransition'; // show a fade in/out effect
import { convertDates } from '@/helpers/convertDates';

// COMPONENTS
import { Event } from '@/components/Event';
import { EventsNone } from '@/components/EventsNone';

import type { GEvent, GEventCategories, GLocation, GRawEvent } from '@/types';

// API
const apiEndpoint = `${import.meta.env.VITE_API_ROOT}/events`;

type Props = {
  filter: (events: GEvent[]) => GEvent[];
};

export const EventList = ({ filter }: Props) => {
  const [events, setEvents] = useState<GEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<GEvent[]>([]); // Filtered events
  const { data, pending }: { data: GRawEvent[] | null; pending: boolean } =
    useFetch(apiEndpoint);

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
    const startDate = queryParams.get('start');
    const endDate = queryParams.get('end');

    setFilteredEvents(filterCategories(events, queryTypes) as GEvent[]);
    if (queryLocations.length) {
      setFilteredEvents(
        (prev) => filterLocations(prev, queryLocations) as GEvent[],
      );
    }

    if (startDate || endDate) {
      const sd = startDate ? new Date(startDate) : null;
      const ed = endDate ? new Date(endDate) : null;
      setFilteredEvents(
        (prev) => filterByStartAndEndDate(prev, sd, ed) as GEvent[],
      );
    }

    viewTransition('.event-list');
  }, [events, search]);

  return (
    <>
      <div className="event-list">
        {/* filtered events */}
        {filteredEvents &&
          filteredEvents.map((event, index) => (
            <Event key={index} event={event} slug={pathname} />
          ))}
        {/* no events */}
        {!events ||
          (!filteredEvents?.length && (
            <EventsNone
              hasAllEventsBtn={pathname == '/' || pathname == '/tomorrow'}
              pending={pending}
            />
          ))}
      </div>
    </>
  );
};
