import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// inline css style with aphrodite
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  intro: {
    fontSize: '1.7rem',
    alignSelf: 'flex-end'
  },
  notifications: {
    fontSize: '1.5rem',
    backgroundColor: 'white',
    border: '1px dashed red'
  },
  small: {
    '@media only screen and (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      padding: 0
    }
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
          <div className={css(style.container)}>
            <div className={css(style.intro)}>
              <p>Your Notifications</p>
            </div>
            <div className={css(style.notifications)}>
              <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={(e) => console.log("Close button has been clicked")}>
                <img src={close} alt='icon' style={{width: .5 + 'rem', height: .5 + 'rem'}} />
              </button>
              {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
              <ul className={css(style.small)}>
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
          </div>
        ) : (
          <div className={css(style.intro)}>
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