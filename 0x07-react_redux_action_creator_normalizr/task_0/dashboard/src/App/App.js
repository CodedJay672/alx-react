import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext, user, logOut } from './AppContext';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

// Array containing list of courses
const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40},
  {id: 4, name: "Computer Science", credit: 60},
  {id: 5, name: "Analysis of Algorithm", credit: 50}
];

// main App
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: user,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
      ],
      logOut: logOut
    };
    
    this.keyDown = this.keyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  keyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();

      // prevent default effect of this key combination
      event.preventDefault();
    };
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      },
      logOut: logOut
    });
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const notifications = this.state.listNotifications.filter((listNotification) => listNotification.id !== id);
    this.setState({ listNotifications: notifications });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
  }

  render() {
    return (
      <>
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.logOut}
        }
      >
        <Notifications
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className='App'>
          <div className={css(style.header)}>
            <Header />
          </div>
          <div className={css(style.body)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
                          ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
                              )}
            <BodySection title="News from the school">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Molestie at elementum eu facilisis sed odio morbi quis commodo. Sed elementum tempus egestas sed sed risus pretium. Aenean et tortor at risus viverra adipiscing at. Sit amet purus gravida quis blandit turpis cursus. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Gravida quis blandit turpis cursus in. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Ipsum consequat nisl vel pretium lectus. Feugiat pretium nibh ipsum consequat nisl vel. Nunc sed velit dignissim sodales ut. Fames ac turpis egestas sed. Fames ac turpis egestas integer. Dictum fusce ut placerat orci nulla pellentesque.</p>
            </BodySection>
          </div>
          <div className={css(style.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
      </>
    );
  }
}

// define aphrodite css style using the Stylesheet.create method
const style = StyleSheet.create({
  app: {
    width: '100%',
    padding: '0 30px'
  },
  header: {
    margin: 0,
    width: '100%',
    borderBottom: '3px solid rgb(230, 41, 41)'
  },
  body: {
    width: '80%',
    margin: '0 auto',
    fontSize: '1.3rem'
  },
  footer: {
    textAlign: 'center',
    fontSize: '.75rem',
    fontStyle: 'italic',
    borderTop: '3px solid rgb(230, 41, 41)',
    marginTop: '50px',
    padding: '5px',
    paddingBottom: '20px'
  }
});

// default props
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

// prop validation
App.propTypes ={
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;