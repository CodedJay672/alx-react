import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('checks notification rendition', () => {
  it('render Notification without crashing', () => {
    shallow(<Notifications />);
  });

  it('checks if there are 3 li tags', () => {
    const wrapper = shallow(<Notifications  />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
  })
  
  it('tests if node contains the right string', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  })
})