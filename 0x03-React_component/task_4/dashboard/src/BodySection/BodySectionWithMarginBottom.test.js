import React from "react";
import { mount } from 'enzyme';
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe('checks that the component renders appropriately', () => {
  it('checks that the component passes the right props to the BodySection tag', () => {
    const wrapper = mount(<BodySectionWithMarginBottom title="passed from a component" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual("<div class=\"bodysection\"><h2>passed from a component</h2></div>");

    wrapper.unmount();
  }) ;
});