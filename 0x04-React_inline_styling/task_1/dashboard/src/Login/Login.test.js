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
    expect(Wrapper.find('input')).toHaveLength(2);
  });
});