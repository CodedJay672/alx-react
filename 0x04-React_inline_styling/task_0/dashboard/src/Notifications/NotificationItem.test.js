import React from 'react';
import { shallow } from 'enzyme/build';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem type='default' />);
  });
/*
  it('checks the NotificationItem component', () => {
    const Wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(Wrapper.html()).toEqual(<li data-notification-type="urgent">text</li>);
  });
*/
  it('checks the NotificationItem component when html is passed', () => {
    const Wrapper = shallow(<NotificationItem html={{__html: "<u>test</u>"}}/>);
    expect(Wrapper.find('li')).toHaveLength(1);
  });

  describe('simulates onClick event on the NotificationItem', () => {
    it('checks that the onclick event will trigger the markAsRead function', () => {
      // create a spy and pass it as a property to the NotificationItem
      const spy = jest.fn();
      const wrapper = shallow(<NotificationItem />);

      // set the new properties for the component
      // markAsRead property takes the spy as a value
      wrapper.setProps({value: 'test', markAsRead: spy, id: 1});

      // we simulate the click event using the .simulate method
      wrapper.find('li').simulate('click');

      // perform some expected checks to confirm the spy gets triggered
      // after the click simulation
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(1);

      // restore the original markAsRead function
      spy.mockRestore();
    });
  })
});