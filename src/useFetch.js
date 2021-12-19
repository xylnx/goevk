// this is a custom HOOK
// it handles server requests

import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs every time the page rerenders
  // passing an empty array makes it only run on the first render though
  useEffect(() => {
    // abort controller allows to abort a fetch
    const abortCont = new AbortController();

    setTimeout(() => {

      // abort controller: we here associate abortCont with this fetch
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        // throw an error,
        // if server sends an error
        // ok prop in response obj will be false 
        if(!res.ok) {
          throw Error('could not fetch data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      // catch network errors
      // will only fire if no connection can be made
      // errors send from the server are caught above 
      .catch(err => {
        if(err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    // url in brackets:
    // whenever url changes, the page rerenders
    }, 1000)

    // cleanup function
    // will be fired if the component using this hook unmounts before the fetch finished
    // our cleanup fn uses an abort controller to stop the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }
}

export default useFetch;
