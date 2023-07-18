import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// style the listitems individually
const style = StyleSheet.create({
  default: {
    color: 'blue',
    ':hover': {
      cursor: 'pointer'
    },
    '@media only screen and (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px'
    }
  },
  urgent: {
    color: 'red',
    ':hover': {
      cursor: 'pointer'
    },
    '@media only screen and (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px'
    }
  }
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value ? (
          <li data-notification-type={type} id={id} onClick={() => markAsRead(id)} className={css(
            type === 'default' ? style.default : style.urgent, style.small
          )}>
            {value}
          </li> )
         : (<li data-notification-type={type} id={id} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} className={css(type === 'default' ? style.default : style.urgent, style.small)}></li>)}
      </>
    );
  };
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
}

NotificationItem.defaultProps = {
  type: 'default',
  html: {__html: "<u>Text</u>"},
  markAsRead: console.log('undefined function'),
  id: 0
}

export default NotificationItem;