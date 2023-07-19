import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Tests the <BodySection />', () => {
  it('tests that component renders its children correctly', () => {
    const wrapper = shallow(<BodySection title="test text">Hello world</BodySection>);

    expect(wrapper.find('h2').text()).toEqual('test text');
    expect(wrapper.instance().props.children).toEqual('Hello world');
  });
});