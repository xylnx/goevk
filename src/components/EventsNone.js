import { Link } from "react-router-dom";

const EventsNone = ({ today, setToday, pending }) => {
  const containerStyles = {
    border: "1px solid var(--clr-fg)",
    padding: "4%",
    color: "var(--clr-fg)",
    fontSize: "16px",
    textAlign: "center",
  };

  const svgContainer = {
    maxWidth: "120px",
    maxHeight: "120px",
    margin: "16px auto",
  };

  const btnContainer = {
    margin: "16px 0",
    display: "flex",
    justifyContent: "center",
    fontSize: "16px",
  };

  return (
    <div className="eventsNone__container" style={containerStyles}>
      <div className="eventsNone__svg-container" style={svgContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="var(--clr-accent)"
          className={`${pending ? "svgLoading" : ""} bi bi-boombox`}
          viewBox="0 0 16 16"
        >
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
        </svg>
      </div>
      {/* Still loading data */}
      {pending && (
        <div className="eventsNone__copy">
          <span style={{ fontWeight: "bold" }}>Einen Moment... </span>
          <p>Ich suche nach Veranstaltungen.</p>
        </div>
      )}
      {/* No events for today */}
      {today && !pending && (
        <>
          <div className="eventsNone__copy">
            <span style={{ fontWeight: "bold" }}>Ooops</span>, leider finde ich
            keine Events für heute. Guck doch mal, was in den kommenden Tagen
            los ist:
          </div>
          <div style={btnContainer}>
            <Link to="/all" className="btn all">
              Alle Veranstaltungen
            </Link>
          </div>
        </>
      )}
      {/* No events at all */}
      {!today && !pending && (
        <div className="eventsNone__copy">
          <span style={{ fontWeight: "bold" }}>
            Leider finde ich keine Veranstaltungen.
          </span>{" "}
          Schau später nochmal vorbei.
        </div>
      )}
    </div>
  );
};

export default EventsNone;
