// Provide date + time of an event
// Takes an array of event objects
// manipulates each of the containing objects

import type { GEvent } from '@/types.ts';

function convertDates(eventObjects: GEvent[]) {
  eventObjects.forEach((eventObj) => {
    const dateDetails = getDateDetails(eventObj.date);
    eventObj.dateDetails = dateDetails;
  });
  return eventObjects;
}

function getDateDetails(dateStr: string) {
  // Convert date object into a date object
  const date = new Date(dateStr);

  // Format date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Berlin',
  };

  const dateArr = new Intl.DateTimeFormat('de-DE', options)
    .format(date)
    .split(/(,|\sum\s)/);

  const dateInfo = {
    weekday: dateArr[0],
    date: dateArr[2],
    time: dateArr[4].trim(),
    month: date.getMonth(),
    day: date.getDate(),
  };

  return dateInfo;
}

export default convertDates;
