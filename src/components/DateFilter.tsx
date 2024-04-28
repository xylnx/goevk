import { useSearchParams, useNavigate } from 'react-router-dom';

export function DateFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleStartDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    searchParams.set('start', target.value);
    return setSearchParams(searchParams);
  }

  function handleEndDate(e: React.SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    searchParams.set('end', target.value);
    return setSearchParams(searchParams);
  }

  function resetDates() {
    searchParams.delete('start');
    searchParams.delete('end');
    setSearchParams(searchParams);
  }

  return (
    <details open>
      <summary>Datum</summary>
      <label htmlFor="startDate">Beginn</label>
      <input
        type="date"
        name="start-date"
        id="startDate"
        onChange={(e) => handleStartDate(e)}
      />
      <label htmlFor="endDate">Ende</label>
      <input
        type="date"
        name="end-date"
        id="startDate"
        onChange={(e) => handleEndDate(e)}
      />

      {(searchParams.get('start') || searchParams.get('end')) && (
        <button className="btn btn--small btn--border-fg" onClick={resetDates}>
          <span>&times; </span>
          Datum zurücksetzen
        </button>
      )}
    </details>
  );
}
