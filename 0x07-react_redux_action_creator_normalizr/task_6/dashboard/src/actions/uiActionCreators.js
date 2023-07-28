// this file defines the UI action creators

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
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


export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}