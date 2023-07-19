import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import './CourseList.css';


function CourseList({ listCourses }) {

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses && listCourses.length > 0 ? (
          listCourses.map(({id, name, credit}) => {
            return (<CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
          })
        ) : (
          <CourseListRow textFirstCell="no courses available" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

export default CourseList;