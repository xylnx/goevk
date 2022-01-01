const Event = (props) => {
  const events = props.event;

  return (
    <>
      {events.map((event) => (
        // TODO: ad id column to event DB
        <article
          className="event-card"
          key={event.id}
          data-color={event.dateDetails.weekday}
        >
          <div className="event-card__upper" style={{ color: "var(--clr-fg)" }}>
            <div className="event__place">{event.place}</div>

            <div className="event__date">{event.dateDetails.date}</div>
            <div className="event__day">[ {event.dateDetails.weekday} ]</div>
            <div className="event__type">{event.type}</div>
          </div>

          <div className="event-card__lower">
            <div className="event__time">{event.dateDetails.time}</div>

            {/* Title Link */}
            <a
              href={event.link}
              target="blank"
              rel="noopener"
              className="event__name"
            >
              {event.name}
            </a>

            {/* Arrow Link */}
            <a
              href={event.link}
              target="blank"
              rel="noopener"
              className="event__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="var(--clr-accent)"
                className="bi bi-forward-fill"
                viewBox="0 0 16 16"
              >
                <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </>
  );
};

export default Event;
