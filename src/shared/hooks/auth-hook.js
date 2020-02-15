import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = // thanks to scoping this is a different variable than the one outside this function
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); //Date is a built-in js browser API. We create new date object set it to current date with another new date get the time since the beggining of the day and math up an hour in milliseconds to set it to the time an hour later which is when we set our token to expire
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      // global js browser API that will store our token in the browser so that we can use that data for ue when the page is refreshed or the browser is restarted users stay logged in. We have to make sure our app is secure as local storage can be accessed from outside. React also has built-in sanitizing that helps with security as long as we use react code.
      JSON.stringify({
        //we need to store data in form of text, hence converting object to json
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString() //toISOString is a special kind of string which makes sure no data gets lost when a date is stringified and it can be converted back to a date later
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(false);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    // useEffect runs after everything else is rendered. Not including anything in the square brackets ensures its rendered only when the app is first started. In this case we have a dependency (login) but because of the useCallback above the code will still run only once
    const storedData = JSON.parse(localStorage.getItem("userData")); // JSON.parse converts the text back to js object
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date() // this converts the expiration back to a date and compares to see if it has been expired by checking if the expiration milliseconds is greater than the current milliseconds from the begginging of the day
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration) //forwarding the expiration to login
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};
