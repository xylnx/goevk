import { Link } from 'react-router-dom';
import { IconArrow } from '../assets/icon-arrow';

// Create a query from an events type property
const typeLink = (eventType) => {
  const types = eventType.split(',');
  let query = '?';
  let params = 'type=';
  params += types.reduce((acc, cur) => {
    return acc + `&type=${cur.trim()}`;
  });

  query += params;
  return query;
};

export const Event = ({ event, slug }) => {
  return (
    <article className="event-card" data-color={event.dateDetails.weekday}>
      {/* Event meta data */}
      <div className="event__place">{event.place}</div>
      <div className="event__date">
        {event.dateDetails.date}
        <span className="event__day">[{event.dateDetails.weekday}]</span>
      </div>

      {/* Categories to sort events */}
      <Link
        to={`${slug ? slug : ''}${typeLink(event.type)}`}
        className="event__type"
      >
        {event.type}
      </Link>

      <div className="event__time">{event.dateDetails.time}</div>

      {/* Event name, links a page related to the event */}
      <a
        href={event.link}
        target="blank"
        rel="noopener"
        className="event__name"
      >
        {event.name}

        {/* Just an arrow icon */}
        <IconArrow />
      </a>
    </article>
  );
};
