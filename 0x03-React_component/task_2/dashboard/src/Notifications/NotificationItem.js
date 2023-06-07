import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value ? (
          <li data-notification-type={type} onClick={() => markAsRead(id)}>
            {value}
          </li> )
         : (<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => console.log(id)}></li>)}
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