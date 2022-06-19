export const FilterControls = () => {
  return (
    <>
      <span style={{ color: '#f0f', marginRight: '.8rem' }}>
        aktive Filter:
      </span>
      <button type="button" className="filter-control__btn">
        Filter x
      </button>
    </>
  );

  /* TODO:
   * read url params
   * display btn according to url params
   * delete url params when removing button
   */
};
