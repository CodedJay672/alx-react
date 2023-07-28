import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreators } from 'redux';

export const selectCourse = bindActionCreators((index) => {
  return {
    type: SELECT_COURSE,
    index
  }
}, dispatch)

export const unselectCourse = bindActionCreators((index) => {
  return {
    type: UNSELECT_COURSE,
    index
  }
}, dispatch)