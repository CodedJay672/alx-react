import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

// define styles with aphrodite framework
const style = StyleSheet .create({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
    border: '1px solid grey'
  }
})

function CourseList({ listCourses }) {

  return (
    <table id="CourseList" className={css(style.table)}>
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