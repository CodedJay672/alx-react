import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders the App components', () => {
    shallow(<App />);
  });

  it('checks if a App renders a div with the className App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header').hasClass('App-header')).toEqual(true);
  });

  it('checks if a div with className App-body is present', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').hasClass('App-body')).toEqual(true);
  });

  it('checks if div with className App-footer is present', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer').hasClass('App-footer')).toEqual(true);
  });
});