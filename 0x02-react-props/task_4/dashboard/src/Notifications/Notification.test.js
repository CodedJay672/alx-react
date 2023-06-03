import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('checks notification rendition', () => {
  it('render Notification without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.contains(<li data-notification-type="default">New course available</li>)).toBe(true);
    expect(wrapper.contains(<li data-notification-type="urgent">New resume available</li>)).toBe(true);
    expect(wrapper.contains(<li data-urgent="true">${getLatestNotification()}</li>)).toBe(true);
  });
  
  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });
  
  it('tests if node contains the right string', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('checks that menuItems displayed when displayItem is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('checks if notification dis not displayed when displayItem is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('checks that menuItem displayed when diplayItem is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('checks that div.Notification is displayed when displayItem is true', () => {
    const wrapper = shallow(<Notifications displayItem={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});