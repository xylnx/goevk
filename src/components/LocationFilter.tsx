import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFetch } from '@/hooks/useFetch';

import type { GLocation } from '@/types';

// API
const apiEndpoint = `${import.meta.env.VITE_API_ROOT}/locations`;

export function LocationFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data }: { data: GLocation[] | null; pending: boolean } =
    useFetch(apiEndpoint);
  const [locations, setLocations] = useState<GLocation[]>([]);

  useEffect(() => {
    if (data) setLocations(JSON.parse(data));
  }, [data]);

  function handleLocation(loc: GLocation) {
    const currentLocations = searchParams.getAll('location');

    currentLocations.includes(loc) ?
      searchParams.delete('location', loc)
    : searchParams.append('location', loc);

    setSearchParams(searchParams);
  }

  function resetLocations() {
    searchParams.delete('location');
    setSearchParams(searchParams);
  }

  return (
    <div className="filters">
      <details open>
        <summary>Locations</summary>

        {locations &&
          locations.map((loc, i) => (
            <button
              key={loc + i}
              onClick={() => handleLocation(loc)}
              className={`btn btn--small ${searchParams.getAll('location').includes(loc) ? 'active' : ''}`}
            >
              {loc}
            </button>
          ))}
        <br />

        {searchParams.getAll('location')?.length != 0 && (
          <button
            className="btn btn--small btn--border-fg"
            onClick={resetLocations}
          >
            <span>&times; </span>
            Locations zurücksetzen
          </button>
        )}
      </details>
    </div>
  );
}
