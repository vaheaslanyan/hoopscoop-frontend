import { createContext } from "react";

export const AuthContext = createContext({
  //all this data is managed in App.js
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});
