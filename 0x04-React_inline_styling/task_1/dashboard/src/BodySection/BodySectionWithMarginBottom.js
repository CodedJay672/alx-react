import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css, reset } from 'aphrodite';

// aphrodite reset
reset();

// define css style using aphrodite framework
const style = StyleSheet.create({
  bottom: {
    marginBottom: 40
  },
})

class BodySectionWithMarginBottom extends Component {
  render() {
    return(
      <div className={css(style.bottom)}>
        <BodySection {...this.props} />
      </div>
    );
  };
}


BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default BodySectionWithMarginBottom;