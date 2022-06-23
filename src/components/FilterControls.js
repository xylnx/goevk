import { useLocation, useHistory } from 'react-router';

export const FilterControls = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const removeFilter = () => {
    history.push(pathname);
  };

  // read url params
  const queryParams = new URLSearchParams(search);
  const queries = queryParams.getAll('type');

  return (
    <>
      <span
        style={{ color: '#f0f', marginRight: '.8rem' }}
        className="filter-control__btn"
      >
        aktive Filter:
      </span>
      {queries.map((query) => {
        return (
          <button
            onClick={removeFilter}
            type="button"
            className="filter-control__btn"
          >
            {query}
          </button>
        );
      })}
    </>
  );
};
