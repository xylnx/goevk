const rawEventExample = {
  type: ' konzert, veranstaltungen',
  place: 'Apex',
  name: 'QuerQuassler: Improvisierter Frühling',
  link: '/veranstaltungen/2024/april/querquassler/',
  date: '1970-01-01T00:00:00.000Z',
  hasStartTime: true,
};

// Internally date details are added to
// make information available before rendering (time, date, weekday), and
// make filtering easier (month, day)
const enhancedEventExample = {
  type: 'theater, musicals, veranstaltungen',
  place: 'Junges Theater',
  name: 'Poetry Slam',
  link: 'https://www.junges-theater.de/stueck/poetry-slam/',
  date: '2024-06-30T17:00:00.000Z',
  hasStartTime: true,
  dateDetails: {
    weekday: 'So.',
    date: ' 30. Juni 2024',
    time: '19:00',
    month: 5,
    day: 30,
  },
};

export type GRawEvent = typeof rawEventExample;
export type GEvent = typeof enhancedEventExample;
