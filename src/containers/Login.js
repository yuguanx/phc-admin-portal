import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginFailed: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        'email': this.state.email,
        'password': this.state.password,
      }),
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .catch(error => {
      console.error('Error occured while logging in:', error);
      this.setState({loginFailed: true});
    })
    .then(data => {
      if (data.loginSuccess === true) this.props.
      else this.setState({loginFailed: true});
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="medium"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        {this.state.loginFailed && <p className="error-msg">Login failed</p>}
        </form>
      </div>
    );
  }
}
