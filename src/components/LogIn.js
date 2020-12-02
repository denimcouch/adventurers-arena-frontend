import React, { Component } from "react";
import { Form } from 'semantic-ui-react'

class LogIn extends Component {
  constructor(){
    super()

    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = ({name, value}) => {
    this.setState({
      user:{
        ...this.state.user,
        [name]: value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Logging this!', this.state)
    this.props.logInUser(this.state)
    const form = document.getElementById("log-in-form")
    form.reset()
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <Form id="log-in-form" onSubmit={(e) => this.handleSubmit(e)} >
          <Form.Field>
            <label>Username</label>
            <Form.Input icon="user" iconPosition='left' placeholder="Username" name="username" onChange={(e) => this.handleChange(e.target)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input icon="lock" iconPosition='left' type="password" placeholder="Password" name="password" onChange={(e) => this.handleChange(e.target)} />
          </Form.Field>
          <Form.Button type='submit' primary>Log in</Form.Button>
        </Form>
      </div>
    );
  }
}

export default LogIn;
