import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router';

export const FilterControls = () => {
  const { search, pathname } = useLocation();
  const [typeQueries, setTypeQueries] = useState([]);
  const history = useHistory();

  const removeFilter = (e) => {
    // Get event type from clicked button
    const clickedEventType = e.target.dataset.eventType;

    if (typeQueries.length > 0) {
      // Find position of event type in typeQueries array
      const pos = typeQueries.indexOf(clickedEventType);
      const newTypes = typeQueries;

      // Use splice to mutate the newTypes array
      // => remove the clicked type
      newTypes?.splice(pos, 1);

      if (newTypes.length > 0) {
        // Build new query string
        let query = '?';
        let params = 'type=';
        params += newTypes?.reduce((acc, cur) => acc + `&type=${cur}`);
        query += params;

        // Push the new query
        history.push(pathname + query);
        return;
      }
      // If newTypes is empty
      // (happens after removing the last filter)
      // reload current path
      history.push(pathname);
    }
  };

  useEffect(() => {
    // read url params
    const queryParams = new URLSearchParams(search);
    setTypeQueries(queryParams.getAll('type'));
  }, [search]);

  return (
    <>
      <span className="filter-control__btn">Kategorien:</span>
      {!typeQueries.length && (
        <button
          onClick={removeFilter}
          type="button"
          className="filter-control__btn filter-control__btn--all"
        >
          Alle
        </button>
      )}
      {typeQueries?.map((query) => {
        return (
          <button
            onClick={removeFilter}
            type="button"
            className="filter-control__btn"
            data-event-type={query}
            key={query}
          >
            {query}
          </button>
        );
      })}
    </>
  );
};
