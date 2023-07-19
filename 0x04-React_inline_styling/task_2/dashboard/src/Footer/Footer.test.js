import React from "react";
import { shallow } from "enzyme/build";
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders the footer component without crashing', () => {
    shallow(<Footer />);
  });

  it('checks if the text Copyright is returned', () => {
    const Wrapper = shallow(<Footer />);
    expect(Wrapper.text()).toContain('Copyright');
  });
});