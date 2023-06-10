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


  it('checks that the right notification intro message is printed', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new Notification for now</li>)).toBe(true);
    wrapper.unmount();
  });

  it('checks if the notification component re-renders if the same listNotification is passed', () => {
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
    wrapper.unmount( );
  });

  it('checks if the Notification component is re-rendered if an updated list is passed', () => {
    // Updated Array for Notification List
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: {__html: getLatestNotification()} },
      { id: 4, type: "default", value: "New test Notification" }
    ]

    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(true);
    wrapper.unmount();
  })

  describe('markAsRead calls console.log', () => {
    it('checks that markAsRead calls console.log which displays the right message', () => {
      // creates a spy to monitor the console.log function
      const spy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

      // create an instance of the component and call the markAsRead function which should trigger the spy
      wrapper.instance().markAsRead = spy;

      // call the markAsRead function on the instance and with a dummy argument
      wrapper.instance().markAsRead(1);

      // test the markAsRead function
      expect(wrapper.instance().markAsRead).toBeCalledWith(1);
      expect(wrapper.instance().markAsRead).toBeCalledTimes(1);

      // test the console.log function and check if the message it prints
      // to ensure it is the right
      expect(spy).toBeCalledTimes(1);
      expect(spy).toHaveReturned();
      expect(spy).toHaveBeenCalledWith(1);

      spy.mockRestore();
      wrapper.unmount();
    });
  });
});