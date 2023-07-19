import React from "react";
import { shallow, mount } from "enzyme/build";
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders the footer component without crashing', () => {
    shallow(<Footer />);
  });

  it('checks if the text Copyright is returned', () => {
    const Wrapper = shallow(<Footer />);
    expect(Wrapper.text()).toContain('Copyright');
  });
});

describe('utilize context', () => {
  it('checks that link is not rendered if logged out', () => {
    const context = {
      user: {
        enail: '',
        password: '',
        isLoggedIn: false
      }
    }
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').exists()).toEqual(false);
    expect(wrapper.find('p').text()).toContain('Copyright');
    wrapper.unmount();
  });

  it('checks if the link is rendered if the isLoggedIn is true', () => {
    const context = {
      user: {
        enail: '',
        password: '',
        isLoggedIn: true
      }
    }
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('a').exists()).toEqual(true);
    expect(wrapper.find('p').at(1).text()).toContain('Copyright');
        
    wrapper.unmount();
  })
})