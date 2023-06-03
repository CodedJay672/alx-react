import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App(isLoggedIn) {
  return (
    <>
      <Notifications />
      <div className='App'>
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          {isLoggedIn ? (<CourseList />) : (<Login />)}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}


App.defaultProps = {
  isLoggedIn: false
};

App.propTypes ={
  isLoggedIn: PropTypes.bool
};

export default App;