import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from "./notificationActionTypes";

import {
  markAsRead,
  setNotificationFilter
} from "./notificationActionCreators";

describe('tests the notification func', () => {
  it('checks for correct return', () => {
    expect(markAsRead('1')).toEqual({
      type: MARK_AS_READ,
      index: '1'
    })
  });

  it('checks for correct notif return value', () => {
    expect(setNotificationFilter(NotificationTypeFilters[0]))
      .toEqual({
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters[0]
      })
  });
});