import React, { Component } from "react";
import { AppContext } from "../App/AppContext";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

class Header extends Component {
  render() {
    const {user, logOut} = this.context;
    return (
      <>
        <div className={css(style.container)}>
          <img src={logo} alt="logo" className={css(style.logo)} />
          <h1 className={css(style.header)}>School dashboard</h1>
        </div>
        {user.isLoggedIn ?
          (<section id="logoutSection">
            <p>Welcome <strong>{user.email}</strong> <a href="#" onClick={logOut}>(logout)</a></p>
          </section>) : null
        }
      </>
    );
  }
}

// create styles using aphrodite framework
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  logo: {
    width: '40vmin'
  },
  header: {
    alignSelf: "center",
    fontSize: 'calc(2px + 7vmin)',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: 'rgb(230, 41, 41)',
    paddingBottom: '30px'
  }
})

Header.contextType = AppContext;
export default Header;