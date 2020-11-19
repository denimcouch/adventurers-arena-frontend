import React, { Component } from "react";
import { Form } from 'semantic-ui-react'

class SignUp extends Component {

  constructor(){
    super()

    this.state = {
      user: {
        username: '',
        email: '',
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
    console.log('Submitting this!', this.state)
    this.props.signUpUser(this.state)
    const form = document.getElementById('sign-up-form')
    form.reset()
  }

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <Form id="sign-up-form" onSubmit={(e) => this.handleSubmit(e)} >
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" name="username" onChange={(e) => this.handleChange(e.target)} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" onChange={(e) => this.handleChange(e.target)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={(e) => this.handleChange(e.target)} />
          </Form.Field>
          <Form.Button type='submit' primary>Create Account</Form.Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
