import React from "react";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  body: {
    fontSize: '1rem',
    minHeight: '65vmin',
    padding: '40px'
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  input: {
    margin: '0 1rem 0 .5rem',
    borderColor: '1px solid #e3e3e3',
    width: '8rem'
  }
});

function Login() {
  return (
    <div className={css(style.body)}>
      <p>Login to access the full dashboard</p>
      <form action='#' method='post'>
        <label htmlFor="email" className={css(style.label)}>Email:</label>
        <input type='email' name='email' className={css(style.input)} />
        <label htmlFor="password" className={css(style.label)}>Password:</label>
        <input type="password" name='password' className={css(style.input)} />
        <button>OK</button>
      </form>
    </div>
  )
}

export default Login;