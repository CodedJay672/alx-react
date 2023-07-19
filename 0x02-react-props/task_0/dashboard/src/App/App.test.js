import React from 'react';
import { shallow } from 'enzyme/build';
import App from './App';
import Notifications from '../Notification/Notifications.test';
import Header from '../Header/Header.test';
import Login from '../Login/Login.test';
import Footer from '../Footer/Footer.test';

describe('<App />', () => {
  it('renders the App components', () => {
    shallow(<App />);
  });

  <Header />;
  <Notifications />;
  <Login />;
  <Footer />;
});