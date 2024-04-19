import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useFetch } from '@/hooks/useFetch';

import type { GLocation } from '@/types';

// API
const apiEndpoint = `${import.meta.env.VITE_API_ROOT}/locations`;

export function LocationFilters() {
  const { data }: { data: GLocation[] | null; pending: boolean } =
    useFetch(apiEndpoint);

  const [locations, setLocations] = useState<GLocation[]>([]);
  const [activeLocations, setActiveLocations] = useState<GLocation[]>([]);

  useEffect(() => {
    if (data) setLocations(JSON.parse(data));
  }, [data]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleLocation(loc: GLocation) {
    if (activeLocations.includes(loc))
      return setActiveLocations((prev) =>
        prev.filter((location) => location != loc),
      );

    setActiveLocations((prev) => [...prev, loc]);
  }

  useEffect(() => {
    let query = `?location=`;
    if (activeLocations.length) {
      activeLocations.forEach((loc) => (query += `${loc}&location=`));
      return navigate(`${pathname}${query}`);
    }
  }, [activeLocations, navigate, pathname]);

  return (
    <div className="filters">
      <details open>
        <summary>Locations</summary>
        <div>Alle zurücksetzen</div>

        {locations &&
          locations.map((loc, i) => (
            <button
              key={loc + i}
              onClick={() => handleLocation(loc)}
              className={`btn btn--small ${activeLocations.includes(loc) ? 'active' : ''}`}
            >
              {loc}
            </button>
          ))}
      </details>
    </div>
  );
}
