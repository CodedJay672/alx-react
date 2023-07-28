import {
  login ,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from "./uiActionCreators";

 import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";

 describe('test uiActioncreator functions', () => {
  it('test login fn', () => {
    expect(login('abc', '123')).toEqual({
      type: LOGIN,
      user: {
        email: 'abc',
        password: '123'
      }
    })
  });

  it('checks the logout fn', () => {
    expect(logout()).toEqual({
      type: LOGOUT
    })
  });

  it('checks the displayNotification fn', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER
    })
  });

  it('checks the hide_notification fn', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER
    })
  });
 })