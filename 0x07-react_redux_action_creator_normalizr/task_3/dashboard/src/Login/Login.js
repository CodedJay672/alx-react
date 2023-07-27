import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }
    
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className={css(style.container)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" className={css(style.label)}>Email:
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChangeEmail}
              className={css(style.input)}
            />
          </label>
          <label htmlFor="password" className={css(style.label)}>Password:
            <input
              type="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChangePassword}
              className={css(style.input)}
            />
          </label>
          {this.state.email && this.state.password ? <input type="submit" value="OK" className={css(style.button)} disabled={false} /> : <input type="submit" value="OK" className={css(style.button)} disabled />}
        </form>
      </div>
    )
  }
}

// aphrodite inline style
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
      display: 'block',
      marginBottom: '20px',
      width: '90%'
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

export default Login;