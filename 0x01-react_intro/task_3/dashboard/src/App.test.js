import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders the App components', () => {
    shallow(<App />);
  });

  it('checks if a App renders a div with the className App-header', () => {
    const wrapper = shallow(<App />);
    const headerDiv = <div className="App-header" />;
    expect(wrapper.containsMatchingElement(headerDiv)).toEqual(true);
  });

  it('checks if a div with className App-body is present', () => {
    const wrapper = shallow(<App />);
    const bodyDiv = <div className="App-body" />;
    expect(wrapper.containsMatchingElement(bodyDiv)).toEqual(true);
  });

  it('checks if div with className App-footer is present', () => {
    const wrapper = shallow(<App />);
    const footerDiv = <div className="App-footer" />;
    expect(wrapper.containsMatchingElement(footerDiv)).toEqual(true);
  });
});