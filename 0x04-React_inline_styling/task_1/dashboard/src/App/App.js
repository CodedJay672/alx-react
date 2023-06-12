import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

// define aphrodite css style using the Stylesheet.create method
const style = StyleSheet.create({
  body: {
    width: 992,
    margin: '0 auto'
  },
  footer: {
    textAlign: 'center',
    fontSize: '.75rem',
    fontStyle: 'italic',
    borderTop: '3px solid rgb(230, 41, 41)',
    padding: '5px'
  }
});

// Array containing list of courses
const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40},
  {id: 4, name: "Computer Science", credit: 60},
  {id: 5, name: "Analysis of Algorithm", credit: 50}
];

// Array for Notification List
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: {__html: getLatestNotification()} }
]


// main App
class App extends Component {
  constructor(props) {
    super(props);

    this.keyDown = this.keyDown.bind(this);
  }

  listCourses = this.props.listCourses;
  listNotifications = this.props.listNotifications;

  keyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className='App'>
          <div className="App-header">
            <Header />
          </div>
          <div className={css(style.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
                          ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
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
      </>
    );
  }
}

// propDefault values
App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};

// prop validation
App.propTypes ={
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;