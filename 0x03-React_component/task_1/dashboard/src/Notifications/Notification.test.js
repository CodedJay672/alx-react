import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

// Array for Notification List
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
]

describe('checks notification rendition', () => {
  it('render Notification without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  });

  it("renders correct list items", () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-notification-type=\"urgent\">${getLatestNotification()}</li>`);
  });
  
  it("renders an unordered list", () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });
  
  it('tests if node contains the right string', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('checks that menuItems displayed when displayItem is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('checks if notification does not displayed when displayItem is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('checks that menuItem displayed when diplayItem is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('checks that div.Notification is displayed when displayItem is true', () => {
    const wrapper = shallow(<Notifications displayItem={true} listNotifications={listNotifications} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('checks if notification is rendered correctly when listNotification is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('ul').children()).toHaveLength(1);
  });

  it('checks if the notification renders correctly if listnotification is null', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={null} />);
    expect(wrapper.find('ul').children()).toHaveLength(1);
  });

  it('checks if the notification text is correct when listnotification is empty', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.contains(<NotificationItem value="No new notification for now" />)).toBe(true);
  });
});