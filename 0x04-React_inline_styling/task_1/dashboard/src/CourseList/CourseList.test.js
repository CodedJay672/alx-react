import React from "react";
import { mount, shallow } from 'enzyme';
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

// list of courses to pass into the Courselist component
const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40},
  {id: 4, name: "Computer Science", credit: 60},
  {id: 5, name: "Analysis of Algorithm", credit: 50}
];


// list of test description to be carried out on the CourseList component
describe ('<CourseList />', () => {
  it('renders CourseList without crashing', () => {
    shallow(<CourseList textFirstCell="test" />);
  });

  it('renders CourseList and checks for the number of children Table has', () => {
    const wrapper = mount(<CourseList listCourses={listCourses}/>);

    expect(wrapper.find(CourseListRow)).toHaveLength(7);
  });

  it('checks if the courseList module renders correctly when listCourses is empty', () => {
    const wrapper = mount(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  })

  it('checks if the courseList component renders correctly if listCourses is null', () => {
    const wrapper = mount(<CourseList listCourses={null} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  })
});