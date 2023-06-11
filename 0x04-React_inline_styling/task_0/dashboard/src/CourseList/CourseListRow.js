import React from 'react';
import PropTypes from 'prop-types';


const headerColor = {
  backgroundColor: '#deb5b545'
}

const rowColor = {
  backgroundColor: '#f5f5f5ab'
}


function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;

  return (
    <tr style={isHeader ? headerColor : rowColor }>
      {isHeader ? (
        textSecondCell === null ?
          (<th colSpan="2">{textFirstCell}</th>) :
          (<>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>)
      ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{props.textSecondCell}</td>
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