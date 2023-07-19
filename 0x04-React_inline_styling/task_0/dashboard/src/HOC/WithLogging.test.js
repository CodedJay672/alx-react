import React from "react";
import { shallow, mount } from 'enzyme';
import WithLogging from "./WithLogging";


describe('testing the HOC', () => {
  it('tests if the console.log was called on both mount and unmount methods', () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    const DummyComponent = WithLogging(() => <p />);
    const wrapper = mount(<DummyComponent />);

    // This checks if the console.log function is called
    // when the component is mounted
    expect(spy).toHaveBeenCalledTimes(1);

    // call for an unmount and check if the console.log
    // is called again
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(2);

    // restore the default console.log function
    spy.mockRestore();
  });

  it('checks if the consol.log is called with the right log messages', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const DummyComponent = WithLogging(() => <p />);
    const wrapper = shallow(<DummyComponent />);

    // check if the right message is logged when component is mounted
    expect(spy).toHaveBeenCalledWith('Component WithLogging(Component) is mounted on');

    // call unmount
    wrapper.unmount();

    // check for another call to console.log and check for the right log message
    expect(spy).toHaveBeenCalledWith('Component WithLogging(Component) is going to unmount');

    // restore ddefaults
    spy.mockRestore();
  });
});