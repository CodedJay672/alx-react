import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";


describe('test action functions', () => {
  it('checks if action functions returns the correct object', () => {
    expect(selectCourse(1)).toEqual({
      type: SELECT_COURSE,
      index: 1,
    })
  });

  it('checks if the unselect actions returns the correct object', () => {
    expect(unselectCourse(1)).toEqual({
      type: UNSELECT_COURSE,
      index: 1,
    })
  })
})