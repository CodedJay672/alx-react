import React from 'react';
import PropTypes from 'prop-types';


const headerColor = {
  backgroundColor: '#f5f5f5ab'
}

const rowColor = {
  backgroundColor: '#deb5b545'
}


function CourseListRow(props) {
  const isHeader =  props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;
  
  if (isHeader) {
    return (
      <tr style={ isHeader ? headerColor : rowColor }>
        {textSecondCell === null ?
          (<th colSpan="2">{textFirstCell}</th>) :
          (<>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>)}
      </tr>
    );
  } else {
    return (
      <tr style={ isHeader ? headerColor : rowColor }>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

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