import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class AdminPlatform extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetch('/getForm', {
      method: 'GET',
      body: '', // Potentially add one more step of login credential check here
    })
    .then(res => res.json())
    .catch(error => console.error('Error while fetching form data:', error))
    .then(res => this.setState(res));
  }

  render() {
    return (<h1>Hi!</h1>);
  }
}
