import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// style the listitems individually
const style = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value ? (
          <li data-notification-type={type} onClick={() => markAsRead(id)} className={css(
            type === 'default' ? style.default : style.urgent
          )}>
            {value}
          </li> )
         : (<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => console.log(id)} className={css(type === 'default' ? style.default : style.urgent)}></li>)}
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