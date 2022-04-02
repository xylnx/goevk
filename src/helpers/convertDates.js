// Provide date + time of an event
// Takes an array of event objects
// manipulates each of the containing objects

function convertDates(eventObjects) {
  eventObjects.forEach((eventObj) => {
    const dateDetails = getDateDetails(eventObj.date, eventObj.name);
    eventObj.dateDetails = dateDetails;
    console.log(eventObj.dateDetails);
  });
  return eventObjects;
}

function getDateDetails(dateStr, eventName) {
  // dateObj gets passed as a string, so:
  // Convert it back into a date object!
  const date = new Date(dateStr);

  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    timeZone: "Europe/Berlin",
    // timeZoneName: "short",
  };

  // Format date
  const dateArr = new Intl.DateTimeFormat("de-DE", options)
    .format(date)
    .split(",");

  const dateInfo = {
    weekday: dateArr[0],
    date: dateArr[1],
    time: dateArr[2],
    month: date.getMonth(),
    day: date.getDate(),
  };

  return dateInfo;
}

export default convertDates;
