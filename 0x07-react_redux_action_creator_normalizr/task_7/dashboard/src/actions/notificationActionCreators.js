import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";

import { bindActionCreators } from 'redux';

export const markAsRead = bindActionCreators(index => {
  return {
    type: MARK_AS_READ,
    index
  }
}, dispatch)

export const setNotificationFilter = bindActionCreators(filter => {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
}, dispatch)

