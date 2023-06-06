import React from 'react';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications(props) {
  const displayDrawer = props.displayDrawer;
  const listNotifications = props.listNotifications;

  return (
    <React.Fragment>
      {displayDrawer ? 
      (
        <>
          <div className='menuItem'>
            <p>Your Notifications</p>
          </div>
          <div className='Notifications'>
            <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={console.log("Close button has been clicked")}>
              <img src={close} alt='icon' style={{width: .5 + 'rem', height: .5 + 'rem'}} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({id, html, type, value}) => {
                  return(<NotificationItem key={id} type={type} value={value} html={html} />)
                })
              ) : (
                  <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        </>
      ) : (
        <div className='menuItem'>
          <p>Your Notifications</p>
        </div>
      )}
    </React.Fragment>
  );
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [{
    html: {__html: "<u>see more</u>"}
  }],
  value: "no new notifications"
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;