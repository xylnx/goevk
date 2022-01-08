const EventButtons = ({ setToday }) => {
  return (
    <div className="buttons">
      <button
        className={`btn today ${today ? "active" : ""}`}
        onClick={() => setToday(true)}
      >
        Heute
      </button>
      <button
        className={`btn all ${today ? "" : "active"}`}
        onClick={() => setToday(false)}
      >
        Alle Veranstaltungen
      </button>
    </div>
  );
};
