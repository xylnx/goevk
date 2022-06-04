import { IconArrow } from '../assets/icon-arrow';

export const Event = ({ event }) => {
  return (
    <article className="event-card" data-color={event.dateDetails.weekday}>
      {/* Event meta data */}
      <div className="event-card__upper">
        <div className="event__place">{event.place}</div>
        <div className="event__date">{event.dateDetails.date}</div>
        <div className="event__day">[ {event.dateDetails.weekday} ]</div>
        <div className="event__type">{event.type}</div>
      </div>

      <div className="event-card__lower">
        <div className="event__time">{event.dateDetails.time}</div>

        {/* Event name */}
        <a href={event.link} target="blank" rel="noopener">
          <div className="event__name">{event.name}</div>
        </a>

        {/* Arrow */}
        <a href={event.link} target="blank" rel="noopener">
          <IconArrow />
        </a>
      </div>
    </article>
  );
};
