import { NavLink } from "react-router-dom";

export const ButtonNav = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="btn nav__item today">
        Heute
      </NavLink>
      <NavLink exact to="/tomorrow" className="btn nav__item tomorrow">
        Morgen
      </NavLink>
      <NavLink to="/all" className="btn nav__item all">
        Alle Veranstaltungen
      </NavLink>
    </nav>
  );
};
