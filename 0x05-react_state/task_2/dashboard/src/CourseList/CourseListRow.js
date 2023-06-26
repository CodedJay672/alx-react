import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// aphrodite style
const style = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
    borderBottom: '1px solid grey'
  },
  firstRow: {
    textAlign: 'center'
  },
  row: {
    backgroundColor: '#f5f5f5ab'
  }
});


function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;

  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ?
          (<th colSpan="2" className={css([style.header, style.firstRow])}>{textFirstCell}</th>) :
          (<>
            <th className={css(style.header)}>{textFirstCell}</th>
            <th className={css(style.header)}>{textSecondCell}</th>
          </>)
      ) : (
          <>
            <td className={css(style.row)}>{textFirstCell}</td>
            <td className={css(style.row)}>{props.textSecondCell}</td>
          </>
          )}
    </tr>
  )
  }

// Type validation
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

// defining default values
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


export default CourseListRow;