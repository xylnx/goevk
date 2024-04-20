import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setPending(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setPending(false);
    }
    fetchData();
  }, [url]);

  return { data, pending };
};
