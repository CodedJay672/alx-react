import React, { createContext } from "react";
import { mount, shallow } from "enzyme/build";
import { AppContext } from "../App/AppContext";
import Header from "./Header";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('renders the Header component without crashing', () => {
    const context = {
      user: {
        email: 'abc@xyz.com',
        password: '123',
        isLoggedIn: true
      },
      logOut: jest.fn()
    };

    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual (true);
  });

  it('checks if rendered tree contains the img and h1 tags', () => {
    const context = {
      user: {
        email: 'abc@xyz.com',
        password: '123',
        isLoggedIn: true
      },
      logOut: jest.fn()
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    wrapper.unmount();
  });

  describe('tests the component with ontext', () => {
    it('checks if the logoutSection is not obvious with default contexts', () => {
      const context = {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: jest.fn()
      };

      const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
      );

      expect(wrapper.find('#logoutSection').exists()).toBe(false);
      wrapper.unmount();
    });

    it('logoutSecton is created when an email is set and isLoggedIn is true', () => {
      const context = {
        user: {
          email: 'abc@xyz.com',
          password: '123',
          isLoggedIn: true
        },
        logOut: jest.fn()
      };

      const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
      );

      expect(wrapper.find('#logoutSection').exists()).toBe(true);
      wrapper.unmount();
    });

    it('checks that logOut is called when the link test is clicked', () => {
      const context = {
        user: {
          email: 'abc@xyz.com',
          password: '123',
          isLoggedIn: true
        },
        logOut: jest.fn()
      };

      const spy = jest.spyOn(context, "logOut");

      const wrapper = mount(
        <AppContext.Provider value={context}>
          <Header />
        </AppContext.Provider>
      );

      wrapper.find('a').simulate('click');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);

      wrapper.unmount();
    })
  });
});