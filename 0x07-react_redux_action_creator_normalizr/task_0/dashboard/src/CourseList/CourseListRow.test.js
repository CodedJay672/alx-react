import React from 'react';
import { shallow } from 'enzyme/build';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
  it('tests for table row content', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);

    expect(wrapper.find('th[colSpan="2"]')).toHaveLength(1);
  });

  it('renders the CourseListRow with th element when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="another test" />);

    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders the CourseListRow when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="another test"/>);

    expect(wrapper.find('td')).toHaveLength(2);
  });
});