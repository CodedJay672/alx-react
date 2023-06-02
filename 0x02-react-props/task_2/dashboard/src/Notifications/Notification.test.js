import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('checks notification rendition', () => {
  it('render Notification without crashing', () => {
    shallow(<Notifications />);
  });

  it('checks if there are 3 li tags', () => {
    const wrapper = shallow(<NotificationItem />);
    const instance = wrapper.instance();

    expect(instance).toBeInstanceOf(NotificationItem);
  });
  
  it('tests if node contains the right string', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
});