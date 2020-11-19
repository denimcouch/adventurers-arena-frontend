import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LogInContainer from "./containers/LogInContainer";
import MainContainer from "./containers/MainContainer";
import "./App.css";

const usersUrl = "http://localhost:3000/api/v1/users";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: {},
    };
  }

  signUpUser = (userObj) => {
    const userOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userObj),
    };
    fetch(usersUrl, userOptions)
      .then((res) => res.json())
      .then((user) => {
        console.log("New user from POST", user);
        debugger;
        this.setState({
          loggedIn: !this.state.loggedIn,
          user,
        });
      });
  };

  logInUser = (userObj) => {
    const { username } = userObj.user;
    fetch(usersUrl + `/login/${username}`)
      .then((res) => res.json())
      .then((userData) => {
        console.log("User from logInUser", userData);
        let user = userData[0];
        this.setState({
          loggedIn: !this.state.loggedIn,
          user,
        });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {" "}
              {this.state.loggedIn ? (
                <Redirect to="/main" />
              ) : (
                <LogInContainer
                  signUpUser={this.signUpUser}
                  logInUser={this.logInUser}
                />
              )}{" "}
            </Route>
            <Route path="/main">
              <MainContainer user={this.state.user} />{" "}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
