import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;

  // initial state pf all the courselist rows should be unchecked
  // const [checked, setChecked] = useState({ checked: true })

  const [ checked, setChecked ] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked)
  }

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
            <td className={css(
              checked ? style.rowChecked : style.row
            )}>
              <input type="checkbox" checked={checked.checked} onChange={handleChange} />{textFirstCell}
            </td>
            <td className={css(
              checked ? style.rowChecked : style.row
            )}>{props.textSecondCell}</td>
          </>
          )}
    </tr>
  )
}

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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

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