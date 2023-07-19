import React from "react";
import './Login.css';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form action='#' method='post'>
        <label htmlFor="email">Email:</label>
        <input type='email' name='email' />
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' />
        <button>OK</button>
      </form>
    </>
  )
}

export default Login;