import React from "react";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { mount, shallow, render } from "enzyme";

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
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = mount(<App isLoggedIn={true} />);
    expect(component.find(CourseList)).toHaveLength(1);
    expect(component.find(Login)).toHaveLength(0);
  });
});

describe('checks when ctrl and h is pressed', () => {
  it('checks if the logOut function is called', () => {
    const mockFn = jest.fn();
    const App = mount(<App logOut={mockFn} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(mockFn).toHaveBeenCalled(1);
    App.unmount();
  });

  document.alert = jest.fn();
  it('calls the alert method', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks if alert is called with the right text', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restorAllMocks();
    wrapper.unmount();
  });
});