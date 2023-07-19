import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(newProps) {
    return newProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? 
        (
          <>
            <div className='menuItem'>
              <p>Your Notifications</p>
            </div>
            <div className='Notifications'>
              <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={(e) => console.log("Close button has been clicked")}>
                <img src={close} alt='icon' style={{width: .5 + 'rem', height: .5 + 'rem'}} />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {this.props.listNotifications && this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map((data, idx) => {
                    return(<NotificationItem key={data.id} type={data.type} value={data.value} html={data.html} markAsRead={this.markAsRead} id={data.id} />)
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
  }
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;