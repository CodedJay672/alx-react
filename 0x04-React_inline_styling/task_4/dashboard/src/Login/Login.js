import React from "react";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  container: {
    padding: '3rem 0',
    margin: '0 0 3rem 0'
  },
  label: {
    width: '50%',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '10px 0',
    marginRight: '20px',
    '@media only screen and (max-width: 900px)': {
      small: {
        fontSize: '2rem',
        width: '100%'
      }
    }
  },
  input: {
    marginLeft: '10px',
    borderColor: '1px solid #e3e3e3',
    width: '20%',
    height: '30px'
  },
  button: {
    width: '10%',
    padding: '10px',
    borderRadius: '5px'
  }
});

function Login() {
  return (
    <div className={css(style.container)}>
      <p>Login to access the full dashboard</p>
      <form action='#' method='post'>
        <label htmlFor="email" className={css(style.label)}>Email:
          <input type='email' name='email' className={css(style.input)} />
        </label>
        <label htmlFor="password" className={css(style.label)}>Password:
          <input type="password" name='password' className={css(style.input)} />
        </label>
        <button className={css(style.button)}>OK</button>
      </form>
    </div>
  )
}

export default Login;