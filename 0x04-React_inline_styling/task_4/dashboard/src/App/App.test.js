import React from "react";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { mount, shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.find(Notifications)).toHaveLength(1);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<CourseList />)).toBe(false);
  });
/*
  it("renders courselist if logged in", () => {
    const component = mount(<App isLoggedIn={true} />);
    expect(component.contains(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });
  */
});

describe('function calls when ctrl and h is pressed', () => {
  it('checks if the logOut function is called and the alert function is called with the right message', () => {
    // mock the logOut and alert functiona
    const logOut = jest.fn();
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    // mount the app and simulate the keydown event
    const wrapper = mount(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);

    // expect alert to be called with the right message
    expect(alert).toHaveBeenCalledWith('Logging you out');

    // the logout function to have been called at least once
    expect(logOut).toHaveBeenCalled();

    // Restore all mock functions and unmount the component
    logOut.mockRestore();
    wrapper.unmount();
  });
});
