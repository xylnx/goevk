// Provide date + time of an event
// Takes an array of event objects
// manipulates each of the containing objects

function convertDates(eventObjects) {
  eventObjects.forEach((eventObj) => {
    const dateDetails = getDateDetails(eventObj.date);
    eventObj.dateDetails = dateDetails;
  });
  return eventObjects;
}

function getDateDetails(dateStr) {
  // dateObj gets passed as a string, so:
  // Convert it back into a date object!
  const date = new Date(dateStr);

  // Format date infos
  /*
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const eventDateLocalized = date.toLocaleDateString("de-DE", options);
  */

  const optionsWeekday = { weekday: "short" };
  const eventWeekday = date.toLocaleDateString("de-DE", optionsWeekday);

  const optionsDate = { month: "long", day: "numeric" };
  const eventDate = date.toLocaleDateString("de-DE", optionsDate);

  const optionsTime = { hour: "numeric", minute: "numeric" };
  const eventTime = date.toLocaleDateString("de-DE", optionsTime);

  const dateInfo = {
    weekday: eventWeekday,
    date: eventDate,
    time: eventTime.split(" ")[1],
    month: date.getMonth(),
    day: date.getDate(),
  };

  return dateInfo;
}

export default convertDates;
