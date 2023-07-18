import React from 'react';
import { shallow } from 'enzyme/build';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('checks if Login renders without crashing', () => {
    <Login />;
  });

  it('checks number of Labels in render tree', () => {
    const Wrapper = shallow(<Login />);
    expect(Wrapper.find('label')).toHaveLength(2);
  });

  it('checks number of input tags in the render tree', () => {
    const Wrapper = shallow(<Login />);
    expect(Wrapper.find('input')).toHaveLength(3);
  });
});

describe('check the login prop default values', () => {
  it('checks if the isLoggedIn is false by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it('checks if button is enabled when both fields contain a string', () => {
    const wrapper = shallow(<Login />);
    wrapper.find("input[type='email']").simulate('change', {target: {value: 'email'}});
    wrapper.find("input[type='password']").simulate('change', {target: {value: 'password'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});