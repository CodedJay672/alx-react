import React from "react";
import { mount } from 'enzyme';
import WithLogging from "./WithLogging";
import Login from '../Login/Login';


describe('testing the HOC', () => {
  it('tests if the console.log was called on both mount and unmount methods', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const dummyComponent = WithLogging(() => <p />);
    const wrapper = mount(<dummyComponent />);

    // This checks if the console.log function is called
    // when the component is mounted
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Component Component is mounted on');

    // call for an unmount and check if the console.log
    // is called again
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');

    // restore the default console.log function
    spy.mockRestore();
  });

  it('checks if the consol.log is called with the right log messages', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const Login = WithLogging(() => <Login />);
    const wrapper = mount(<Login />);

    // check if the right message is logged when component is mounted
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted on');

    // call unmount
    wrapper.unmount();

    // check for another call to console.log and check for the right log message
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith('Component dummyComponent is going to unmount');

    // restore ddefaults
    spy.mockRestore();
  });
});