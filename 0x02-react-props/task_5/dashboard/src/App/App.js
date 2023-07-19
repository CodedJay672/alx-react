import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

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
    const isLoggedIn = this.props.isLoggedIn;
    const listCourses = this.props.listCourses;
    const listNotifications = this.props.listNotifications;
  }

  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className='App'>
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            {isLoggedIn ? (<CourseList listCourses={listCourses} />) : (<Login />)}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// propDefault values
App.defaultProps = {
  isLoggedIn: true
};


// prop validation
App.propTypes ={
  isLoggedIn: PropTypes.bool
};

export default App;