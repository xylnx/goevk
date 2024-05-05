import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function DateFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startInputValue, setStartInputValue] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [endInputValue, setEndInputValue] = useState(
    new Date().toISOString().split('T')[0],
  );

  function handleStartDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setStartInputValue(target.value);
    searchParams.set('start', target.value);
    return setSearchParams(searchParams);
  }

  function handleEndDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setEndInputValue(target.value);
    searchParams.set('end', target.value);
    return setSearchParams(searchParams);
  }

  function resetDates() {
    searchParams.delete('start');
    searchParams.delete('end');
    setSearchParams(searchParams);
    setStartInputValue(new Date().toISOString().split('T')[0]);
    setEndInputValue(new Date().toISOString().split('T')[0]);
  }

  return (
    <div className="filters__dates">
      <details open>
        <summary>Datum</summary>
        <div className="filters__dates__container">
          <label htmlFor="startDate">
            <span>Beginn</span>
            <input
              type="date"
              name="start-date"
              value={startInputValue}
              id="startDate"
              onChange={(e) => handleStartDate(e)}
            />
          </label>
          <label htmlFor="endDate">
            <span>Ende</span>
            <input
              type="date"
              value={endInputValue}
              name="end-date"
              id="endDate"
              onChange={(e) => handleEndDate(e)}
            />
          </label>

          {(searchParams.get('start') || searchParams.get('end')) && (
            <button
              className="btn btn--small btn--border-fg"
              onClick={resetDates}
              style={{ alignSelf: 'end' }}
            >
              <span>&times; </span>
              Datum zurücksetzen
            </button>
          )}
        </div>
      </details>
    </div>
  );
}
