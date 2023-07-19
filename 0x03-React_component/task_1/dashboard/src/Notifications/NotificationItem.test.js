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
});