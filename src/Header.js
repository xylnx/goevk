import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);

  const setBtnActiveState = () => {
    const btnToday = document.querySelector(".btn.today");
    const btnAll = document.querySelector(".btn.all");

    if (location.pathname === "/") {
      btnAll.classList.remove("active");
      btnToday.classList.add("active");
    }
    if (location.pathname === "/all") {
      btnToday.classList.remove("active");
      btnAll.classList.add("active");
    }
  };

  useEffect(() => setBtnActiveState());

  // add a bit of a smoother transition when changing views
  const viewTransition = () => {
    const main = document.querySelector("main");
    main.classList.add("viewTrans");
    setTimeout(removeTrans, 600);
  };

  function removeTrans() {
    const main = document.querySelector("main");
    main.classList.remove("viewTrans");
  }

  const handleBtnClick = () => {
    viewTransition();
  };

  return (
    <>
      <Link to="/" onClick={viewTransition}>
        <h1 style={{ marginBottom: "14px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="var(--clr-accent)"
            className="bi bi-lightning-charge"
            viewBox="0 0 16 16"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
          </svg>
          goeVK
        </h1>
      </Link>
      <div style={{ fontSize: "16px" }}>
        Dein Veranstaltungskalender für Göttingen
      </div>

      <Link to="/" onClick={handleBtnClick} className="btn today">
        Heute
      </Link>
      <Link to="/all" onClick={handleBtnClick} className="btn all">
        Alle Veranstaltungen
      </Link>
    </>
  );
};

export default Header;
