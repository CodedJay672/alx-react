import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  
  return (
    value ? (
      (<li data-notification-type={type}>{value}</li>)
    ) : (<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
  );
}

NotificationItem.defaultProps = {
  type: 'default',
  html: {__html: "<u>Text</u>"}
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default NotificationItem;