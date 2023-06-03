import React from 'react';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
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
              <NotificationItem type="urgent" value="New course available" />
              <NotificationItem type="default" value="New resume available" />
              <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
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
}

Notifications.defaultProps = {
  displayDrawer: false
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

export default Notifications;