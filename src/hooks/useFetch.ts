import { useState, useEffect } from 'react';
import convertDates from '../helpers/convertDates';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      const res = await fetch(url);
      let json = await res.json();
      json = convertDates(json);
      // json = filterForTodaysEvents(json);
      setData(json);
      setPending(false);
    };
    fetchData();
  }, [url]);

  return { data, pending };
};

export default useFetch;
