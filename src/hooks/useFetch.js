import { useState, useEffect } from "react";
import convertDates from "../helpers/convertDates";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      let json = await res.json();
      json = convertDates(json);
      // json = filterForTodaysEvents(json);
      setData(json);
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
