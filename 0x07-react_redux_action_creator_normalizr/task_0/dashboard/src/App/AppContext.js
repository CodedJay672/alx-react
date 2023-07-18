import React from "react";

// create a context to be shared among components
export const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

export function logOut() {
  user.isLoggedIn = false;
}

export const AppContext = React.createContext({user, logOut});