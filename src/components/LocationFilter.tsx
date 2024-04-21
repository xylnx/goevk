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

  /*
  function handleStartDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    searchParams.set('start', target.value);
    return setSearchParams(searchParams)
  }

  function handleEndDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    searchParams.set('end', target.value);
    return setSearchParams(searchParams)
  }
   */

  return (
    <div className="filters">
      {/*
      <details open>
        <summary>Datum</summary>
        <label htmlFor="startDate">Beginn</label>
        <input type="date" name="start-date" id="startDate"  onChange={(e) => handleStartDate(e)}/>
        <label htmlFor="endDate">Ende</label>
        <input type="date" name="end-date" id="startDate"  onChange={(e) => handleEndDate(e)}/>
      </details>
      */}

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
            Alle zurücksetzen
          </button>
        )}
      </details>
    </div>
  );
}
