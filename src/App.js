import React, { Component } from "react";
import LogInContainer from './containers/LogInContainer'
import MainContainer from './containers/MainContainer'
import "./App.css";

const usersUrl = 'http://localhost:3000/api/v1/users'

class App extends Component {

  constructor(){
    super()

    this.state = {
      user: {}
    }
  }

  signUpUser = (userObj) => {
    const userOptions = {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userObj)
    }
    fetch(usersUrl, userOptions)
    .then(res => res.json())
    .then(user => {
      console.log("New user from POST", user)
      debugger
      this.setState({
        user
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Adventurer's Arena</h1>
        <LogInContainer signUpUser={this.signUpUser} />
        <MainContainer user={this.state.user} />
      </div>
    );
  }

}

export default App;
