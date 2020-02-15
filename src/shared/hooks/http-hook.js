import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  //hooks generally have use at the begining of the name
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequests = useRef([]);

  // useCallback to make sure we don't have any unneccessary rerendering or infinite loops
  const sendRequest = useCallback(async (
    // = something sets a default value
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController(); //this is an API supported in modern broesers
    activeHttpRequests.current.push(httpAbortCtrl);
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal //this whole signal Abort controller logic cancels the request in case while waiting for response the user changes a page, this avoids an error due to trying to update a state of a component that is no longer on the screen
      });

      const responseData = await response.json();

      //filtering all the old controllers
      activeHttpRequests.current = activeHttpRequests.current.filter(
        reqCtrl => reqCtrl !== httpAbortCtrl
      );

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
      return responseData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const clearError = () => {
    setError(null);
  };

  // part of the logic that makes sure we dont continue with a request that is on the way out if we switch away from the component that triggered the request
  useEffect(() => {
    //when your return a function in here then it is executed as a cleanup function before the next time useEffect is ran or when the component that uses the useEffect unmounts
    return () => {
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
