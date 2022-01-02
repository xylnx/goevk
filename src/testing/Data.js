import convertDates from "./../getDateDetails";

const localEventObjs = [
  {
    date: "2022-01-02T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/der-satanarchaeoluegenialkohoellische-wunschpunsch/",
    name: "Der satanarch\u00e4ol\u00fcgenialkoh\u00f6llische Wunschpunsch",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
  {
    date: "2022-01-02T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/der-satanarchaeoluegenialkohoellische-wunschpunsch/",
    name: "Der satanarch\u00e4ol\u00fcgenialkoh\u00f6llische Wunschpunsch",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
  {
    date: "2022-01-02T22:00:00.000Z",
    link: "https://www.dt-goettingen.de/stueck/gewalt-und-leidenschaft/",
    name: "Gewalt und Leidenschaft",
    place: "Deutsches Theater",
    type: "Theater, Kultur, Veranstaltungen",
  },
];

const prepareLocalEventObjs = ({ setEvents }) => {
  console.log("TESTING: runing prepareLocalEventObjs");
  const date = new Date();
  const today = {
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}`,
  };

  const eventsArr = convertDates(localEventObjs);
  const todaysEvents = [];

  console.log("ALL EVENTS:", eventsArr);
  console.log("CURRENT TIME:", today);

  // Filter events to find todays events
  eventsArr.forEach((event) => {
    if (
      event.dateDetails.month === today.month &&
      event.dateDetails.day === today.day &&
      event.dateDetails.time >= today.time
    ) {
      todaysEvents.push(event);
    }
  });
  console.log("TODAY'S EVENTS:", todaysEvents);
  setEvents(todaysEvents);
};

export { prepareLocalEventObjs };
