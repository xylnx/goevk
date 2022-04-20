import { NavLink } from "react-router-dom";

export const ButtonNav = () => {
  return (
    <nav className="buttons">
      <NavLink exact to="/" className="btn today">
        Heute
      </NavLink>
      <NavLink to="/all" className="btn all">
        Alle Veranstaltungen
      </NavLink>
    </nav>
  );
};
