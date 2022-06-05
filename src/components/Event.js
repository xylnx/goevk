import { Link } from 'react-router-dom';
import { IconArrow } from '../assets/icon-arrow';

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
  // console.log({ slug });
  return (
    <article className="event-card" data-color={event.dateDetails.weekday}>
      <a href={event.link} target="blank" rel="noopener">
        {/* Event meta data */}
        <div className="event-card__upper">
          <div className="event__place">{event.place}</div>
          <div className="event__date">{event.dateDetails.date}</div>
          <div className="event__day">[ {event.dateDetails.weekday} ]</div>
          <Link
            to={`${slug ? slug : ''}${typeLink(event.type)}`}
            className="event__type"
          >
            {event.type}
          </Link>
        </div>

        <div className="event-card__lower">
          <div className="event__time">{event.dateDetails.time}</div>

          {/* Event name */}
          <div className="event__name">{event.name}</div>

          {/* Arrow */}
          <IconArrow />
        </div>
      </a>
    </article>
  );
};
