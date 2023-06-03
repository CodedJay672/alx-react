import React from "react";
import Proptypes from 'prop-types';
import { shallow } from 'enzyme';
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe ('<CourseList />', () => {
  it('renders CourseList without crashing', () => {
    shallow(<CourseList textFirstCell="test" />);
  });

  it('renders CourseList and checks for the number of children Table has', () => {
    const wrapper = shallow(<CourseList textFirstCell="test"/>);

    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});