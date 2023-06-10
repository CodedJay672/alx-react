import React from "react";
import { shallow } from 'enzyme';
import WithLogging from "./WithLogging";


describe('testing the HOC', () => {
  it('tests if the console.log was called on both mount and unmount methods', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const dummyComponent = WithLogging(() => <p />);
    const wrapper = shallow(<dummyComponent />);

    // This checks if the console.log function is called
    // when the component is mounted
    expect(spy).toHaveBeenCalledTimes(1);

    // call for an unmount and check if the console.log
    // is called again
    wrapper.onmount();
    expect(spy).toHaveBeenCalledTimes(2);

    // restore the default console.log function
    spy.mockRestore();
  });

  it('checks if the consol.log is called with the right log messages', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const dummyComponent = WithLogging(() => <p />);
    const wrapper = shallow(<dummyComponent />);

    // check if the right message is logged when component is mounted
    expect(spy).toHaveBeenCalledWith('Component dummyComponent is mounted on');

    // call unmount
    wrapper.onmount();

    // check for another call to console.log and check for the right log message
    expect(spy).toHaveBeenCalledWith('Component dummyComponent is going to unmount');

    // restore ddefaults
    spy.mockRestore();
  });
});