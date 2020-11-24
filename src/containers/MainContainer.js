import React, { Component } from "react";
import MonstersContainer from "../containers/MonstersContainer";
import UserFormsContainer from "../containers/UserFormsContainer";

class MainContainer extends Component {

  state = {
    encouterName: '',
    chosenMonsters: []
  }

  chooseMonster = (monster) => {
    this.setState({
      chosenMonsters: [...this.state.chosenMonsters, monster]
    })
  }
  resetEncounter = () => {
    this.setState({
      chosenMonsters: []
    })
  }
  nameEncounter = (name) => {
    this.setState({
      encouterName: name
    })
  }

  render() {
    let { monsters } = this.props;

    return (
      <div className="main-container">
        <h1>Main Container</h1>
        <UserFormsContainer chosenMonsters={this.state.chosenMonsters} nameEncounter={this.nameEncounter} resetEncounter={this.resetEncounter} />
        <MonstersContainer monsters={monsters} chooseMonster={this.chooseMonster} />
      </div>
    );
  }
}

export default MainContainer;
