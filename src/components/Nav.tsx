import { NavLink } from 'react-router-dom';

export const Nav = ({ filterBtnAction }: { filterBtnAction: () => void }) => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__item today">
        Heute
      </NavLink>
      <NavLink to="/tomorrow" className="nav__item tomorrow">
        Morgen
      </NavLink>
      <NavLink to="/all" className="nav__item all">
        Alle Events
      </NavLink>
      <button className="btn btn__filters" onClick={filterBtnAction}>
        Filter
      </button>
    </nav>
  );
};
