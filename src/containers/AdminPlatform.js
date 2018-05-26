import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class AdminPlatform extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetch('/api/getForm', {
      method: 'GET',
      body: ''
    })
    .then(res => res.json())
    .catch(error => console.error('Error while fetching form data: ', error))
    .then(res => this.setState(res))
  }

  render() {
    return (<h1>Hi!</h1>)
  }
}
