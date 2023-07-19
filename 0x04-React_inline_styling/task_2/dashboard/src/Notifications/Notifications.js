import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// inline css style with aphrodite
const style = StyleSheet.create({
  base: {
    width: '30%',
    fontSize: 'smaller',
    border: '1px dashed rgb(230, 41, 41)',
    padding: '5px',
    position: 'absolute',
    top: 0,
    right: '10px'
  },
  Notifications: {
    marginTop: '34px',
    backgroundColor: 'white'
  },
  menuItem: {
    width: '20%',
    border: 'none',
    textAlign: 'right'
  }
})

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
            <div className={css([style.base, style.menuItem])}>
              <p>Your Notifications</p>
            </div>
            <div className={css([style.Notifications, style.base])}>
              <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={(e) => console.log("Close button has been clicked")}>
                <img src={close} alt='icon' style={{width: .5 + 'rem', height: .5 + 'rem'}} />
              </button>
              {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
              <ul>
                {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new Notification for now" /> : null }
                {this.props.listNotifications && this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map((data, idx) => {
                    return(<NotificationItem key={data.id} type={data.type} value={data.value} html={data.html} markAsRead={this.markAsRead} id={data.id} />)
                  })
                ) : (
                  null
                )}
              </ul>
            </div>
          </>
        ) : (
          <div className={css([style.base, style.menuItem])}>
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