function getEventsData(API_URL) {
  fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error("could not fetch data for that resource");
    }
    return response.json();
  });
}

const filterForTodaysEvents = (eventsArr) => {
  const todaysEvents = [];

  // define criteria to filter for
  const date = new Date();
  const today = {
    month: date.getMonth(),
    day: date.getDate(),
  };

  console.log(eventsArr);
  eventsArr.filter((event) => {
    if (
      event.dateDetails.month === today.month &&
      event.dateDetails.day === today.day
    ) {
      todaysEvents.push(event);
    }
    console.log(todaysEvents);
    return todaysEvents;
  });
};

module.exports = {
  getEventsData,
  filterForTodaysEvents,
};
