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
  saveEncounter = () => {
    let encounterObj = {
      user_id: this.props.user.id,
      encounter:{
        name: this.state.encouterName,
        monsters: this.state.chosenMonsters.map(mon => mon.id)
      }
    }
    let encounterOptions = {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "applicaiton/json"
      },
      body: JSON.stringify(encounterObj)
    }
    fetch("http://localhost:3000/api/v1/encounters", encounterOptions)
  }

  render() {
    let { monsters } = this.props;

    return (
      <div className="main-container">
        <h1>Main Container</h1>
        <UserFormsContainer chosenMonsters={this.state.chosenMonsters} nameEncounter={this.nameEncounter} resetEncounter={this.resetEncounter} saveEncounter={this.saveEncounter} />
        <MonstersContainer monsters={monsters} chooseMonster={this.chooseMonster} />
      </div>
    );
  }
}

export default MainContainer;
