import React from "react";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

// create styles using aphrodite framework
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottom: '3px solid rgb(230, 41, 41)'
  },
  logo: {
    height: '20vmin',
    marginRight: '2rem'
  },
  header: {
    alignSelf: "center",
    fontSize: 'calc(2px + 2vmin)',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: 'rgb(230, 41, 41)',
    paddingBottom: '30px'
  }
})

function Header() {
  return (
    <div className={css(style.container)}>
      <img src={logo} alt="logo" className={css(style.logo)} />
      <h1 className={css(style.header)}>School dashboard</h1>
    </div>
  );
}

export default Header;