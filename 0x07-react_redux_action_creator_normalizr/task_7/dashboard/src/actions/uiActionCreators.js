// this file defines the UI action creators

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./uiActionTypes";

import { bindActionCreators } from 'redux';

export const login = bindActionCreators((email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}, dispatch)


export const logout = bindActionCreators(() => {
  return {
    type: LOGOUT
  }
}, dispatch)

export const displayNotificationDrawer = bindActionCreators(() => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}, dispatch)

export const hideNotificationDrawer = bindActionCreators(() => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}, dispatch)

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  }
}


export const loginRequest = () => {
  dispatch(login());
  fetch('/dist/login-success.json')
  .then((res) => {
    if(!res.ok) {
      dispatch(loginFailure());
    }
    dispatch(loginSuccess());
  })
}