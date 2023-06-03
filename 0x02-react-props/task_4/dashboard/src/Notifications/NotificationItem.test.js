import React, { useDebugValue } from 'react';
import { shallow } from 'enzyme/build';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem type='default' />);
  });

  it('checks the NotificationItem component', () => {
    const Wrapper = shallow(<NotificationItem type="default" value="test" />);

    Wrapper.setProps({ type: "default", value: "test" });
    expect(Wrapper.contains(<li data-notification-type="default">test</li>)).toBe(true);
  });

  it('checks the NotificationItem component when html is passed', () => {
    const Wrapper = shallow(<NotificationItem type='default' html={<u>test</u>} />);
    expect(Wrapper.contains(<li data-notification-type="default"><u>test</u></li>)).toBe(true);
  });
});