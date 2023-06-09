import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // the components should update if the length of the notification
    // list is changed or if the displayDrawer state has changed 
    if (nextProps.listNotifications !== this.props.listNotifications.length) {
      return true;
    } else if (nextProps.displayDrawer !== this.props.displayDrawer) {
      return true;
    }

    // if none of the conditions are met to prompt an update, then return false
    return false;
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
            <div className={css(style.Notifications)}>
              <button style={{float: 'right', backgroundColor: "white", border: "none"}} aria-label='close' onClick={this.props.handleHideDrawer}>
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
          </div>
        ) : (
          <div className={css(style.container)}>
            <div className={css(style.menuItem)}>
              <p onClick={this.props.handleDisplayDrawer}>Your Notifications</p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
};

const animateFade = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 }
};

const animateBounce = {
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" }
};

// inline css style with aphrodite
const style = StyleSheet.create({
  container: {
    width: '30%',
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  menuItem: {
    width: '100%',
    fontSize: '1rem',
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    display: 'block',
    ':hover': {
      cursor: 'pointer',
      animationName: [animateBounce, animateFade],
      animationIterationCount: 3,
      animationDuration: '0.5s, 1s'
    }
  },
  Notifications: {
    fontSize: '.85rem',
    backgroundColor: 'white',
    border: '1px dashed red',
    '@media only screen and (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      padding: 0
    }
  }
})

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  hanleHideDrawer: PropTypes.func
};

export default Notifications;