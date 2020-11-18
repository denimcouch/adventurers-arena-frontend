import React, { Component } from "react";
import LogInContainer from './containers/LogInContainer'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Adventurer's Arena</h1>
        <LogInContainer />
      </div>
    );
  }
}

export default App;
