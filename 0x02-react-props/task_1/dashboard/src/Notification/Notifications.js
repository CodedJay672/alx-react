import React from 'react';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import './Notifications.css';

function Notifications() {
  return (
    <div className='Notifications'>
      <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={console.log("Close button has been clicked")}>
        <img src={close} alt='icon' style={{width: .5 + 'rem', height: .5 + 'rem'}} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
      </ul>
    </div>
  );
}

export default Notifications;